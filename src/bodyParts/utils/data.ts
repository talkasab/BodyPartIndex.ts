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
        initContained(containedAncestors, containedChildren, item);
        initPartOf(partOfAncestors, partOfChildren, item);
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
 * Initializes the contained hierarchy.
 * @param {AncestorsMap} containedAncestors - The contained ancestors.
 * @param {ChildrenMap} containedChildren - The contained children. 
 * @param {IBodyPart} item - The item.
 */
const initContained = (containedAncestors: AncestorsMap, containedChildren: ChildrenMap, item: IBodyPart): void => {
    containedAncestors[item.radlexId] = item.containedById;
		
    if (!containedChildren[item.containedById]) {
        containedChildren[item.containedById] = [];
    }

    if (item.containedById !== item.radlexId) {
        containedChildren[item.containedById].push(item.radlexId);
    }
};

/**
 * Initializes the partOf hierarchy.
 * @param {AncestorsMap} partOfAncestors - The partOf ancestors.
 * @param {ChildrenMap} partOfChildren - The partOf children. 
 * @param {IBodyPart} item - The item.
 */
const initPartOf = (partOfAncestors: AncestorsMap, partOfChildren: ChildrenMap, item: IBodyPart): void => {
    if (!item.partOfId) return;

    partOfAncestors[item.radlexId] = item.partOfId;
		
    if (!partOfChildren[item.partOfId]) {
        partOfChildren[item.partOfId] = [];
    }

    if (item.partOfId !== item.radlexId) {
        partOfChildren[item.partOfId].push(item.radlexId);
    }
};