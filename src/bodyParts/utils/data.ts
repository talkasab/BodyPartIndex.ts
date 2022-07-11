import { 
    AncestorsMap, 
    BodyPartsMap, 
    ChildrenMap, 
    CodesMap, 
    IBodyPartsResponse, 
    LocalCodesMap 
} from 'src/bodyParts/interfaces/IBodyPartsResponse';
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
    const codes: CodesMap = {};
	
    const localCodes = getLocalCodes(config);

    file.bodyParts.forEach(item => {
        map[item.radlexId] = getItem(item, localCodes);

        initHierarchy(containedAncestors, containedChildren, item.radlexId, item.containedById);
        initHierarchy(partOfAncestors, partOfChildren, item.radlexId, item.partOfId);
        initCodes(map[item.radlexId], codes);
    });

    verifyDuplicateCodes(codes);

    return {
        codes,
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

    config.localBodyPartMappings.forEach(data => {
        if (!map[data.radlexId]) {
            map[data.radlexId] = [];
        }

        map[data.radlexId].push({
            code: data.localCode.code,
            system: data.localCode.system
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

/**
 * Initializes the codes.
 * @param {IBodyPart} item - The item.
 * @param {CodesMap} map - The map.
 */
const initCodes = (item: IBodyPart, map: CodesMap): void => {
    const codes = item.codes || [];
    
    codes.forEach(data => {
        if (!map[data.code]) {
            map[data.code] = [];
        }

        map[data.code].push(item.radlexId);
    });
};

/**
 * Outputs a warning if duplicate codes found.
 * @param {CodesMap} codes - The codes. 
 */
const verifyDuplicateCodes = (codes: CodesMap): boolean => {
    const duplicates: CodesMap = {};

    for (const i in codes) {
        if (codes[i].length > 1) {
            duplicates[i] = codes[i];
        }
    }

    if (!Object.keys(duplicates).length) { 
        return false;
    }
    
    // eslint-disable-next-line no-console
    console.warn('Duplicate codes found. Please fix them.', duplicates);
    
    return true;
};