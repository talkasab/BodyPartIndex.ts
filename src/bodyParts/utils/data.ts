import { AncestorsMap, BodyPartsMap, ChildrenMap, IBodyPartsResponse, LocalCodesMap } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { IBodyPartsFile } from 'src/bodyParts/interfaces/IBodyPartsFile';
import { IConfiguration } from 'src/bodyParts/interfaces/IConfiguration';
import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';

/**
 * Returns the body parts response.
 * @param {IBodyPartsFile} file - The file.
 * @param {IConfiguration?} config - The local configuration.
 */
export const getBodyParts = (file: IBodyPartsFile, config?: IConfiguration): IBodyPartsResponse => {
    const containedAncestors: AncestorsMap = {};
    const containedChildren: ChildrenMap = {};
    const partOfAncestors: AncestorsMap = {};
    const partOfChildren: ChildrenMap = {};
    const map: BodyPartsMap = {};

    const localCodes = getLocalCodes(config);

    file.bodyParts.forEach(item => {
        map[item.radlexId] = getItem(item, localCodes);
        initHierarchy(containedAncestors, containedChildren, item.radlexId, 'containedById');
        initHierarchy(partOfAncestors, partOfChildren, item.radlexId, 'partOfId');
    });

    return {
        containedAncestors,
        containedChildren,
        map,
        partOfAncestors,
        partOfChildren,
        version: file.$version
    };
};

/**
 * Returns the item with local codes.
 * @param {IBodyPart} item - The item. 
 * @param {LocalCodesMap} localCodes - The local codes.
 */
const getItem = (item: IBodyPart, localCodes: LocalCodesMap): IBodyPart => {
    const newItem = { ...item };
	
    if (localCodes[newItem.radlexId]) {
        const codes = newItem.codes || [];

        newItem.codes = [
            ...codes,
            ...localCodes[newItem.radlexId]
        ];
    }

    return newItem;
};

/**
 * Returns the local codes.
 * @param {IConfiguration?} config - The local configuration.
 */
const getLocalCodes = (config?: IConfiguration): LocalCodesMap => {
    if (!config?.localBodyPartMappings || !Array.isArray(config?.localBodyPartMappings)) {
        return {};
    }

    const map: LocalCodesMap = {};

    config.localBodyPartMappings.forEach(localCode => {
        if (!map[localCode.radlexId]) {
            map[localCode.radlexId] = [];
        }

        map[localCode.radlexId].push({
            code: localCode.localCode.code,
            system: localCode.localCode.system
        });
    });

    return map;
};

/**
 * Initializes the hierarchy.
 * @param {AncestorsMap} ancestors - The ancestors.
 * @param {ChildrenMap} children - The children. 
 * @param {string} radlexId - The radlexId.
 * @param {string} key - The key.
 */
const initHierarchy = (ancestors: AncestorsMap, children: ChildrenMap, radlexId: string, key?: string): void => {
    if (!key) return;
	
    ancestors[radlexId] = key;
		
    if (!children[key]) {
        children[key] = [];
    }

    if (key !== radlexId) {
        children[key].push(radlexId);
    }
};