import { AncestorsMap, BodyPartsMap, ChildrenMap, IBodyPartsResponse } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { IBodyPartsFile } from 'src/bodyParts/interfaces/IBodyPartsFile';
import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';

/**
 * Returns the body parts response.
 * @param {IBodyPartsFile} file - The file.
 */
export const getBodyParts = (file: IBodyPartsFile): IBodyPartsResponse => {
    const containedAncestors: AncestorsMap = {};
    const containedChildren: ChildrenMap = {};
    const partOfAncestors: AncestorsMap = {};
    const partOfChildren: ChildrenMap = {};
    const map: BodyPartsMap = {};

    file.bodyParts.forEach(item => {
        map[item.radlexId] = item;
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