import { IBodyPart } from 'src/interfaces/bodyParts/IBodyPart';
import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

type AncestorsMap = { [key: string]: string };
type ChildrenMap = { [key: string]: string[] };
type BodyPartsMap = { [ key: string]: IBodyPart };

class BodyPartsData {

    public static version: string;
    public static bodyPartsMap: BodyPartsMap;
    public static containedAncestors: AncestorsMap;
    public static containedChildren: ChildrenMap;
    public static partOfAncestors: AncestorsMap;
    public static partOfChildren: ChildrenMap;

    /**
     * Initializes the BodyPartsData class.
     * @param {IBodyPartsFile} file - The file.
     */
    public static init (file: IBodyPartsFile): void {
        const containedAncestors: AncestorsMap = {};
        const containedChildren: ChildrenMap = {};
        const partOfAncestors: AncestorsMap = {};
        const partOfChildren: ChildrenMap = {};
        const bodyPartsMap: BodyPartsMap = {};

        file.bodyParts.forEach(item => {
            bodyPartsMap[item.radlexId] = item;
            this.initContained(containedAncestors, containedChildren, item);
            this.initPartOf(partOfAncestors, partOfChildren, item);
        });

        this.version = file.$version;
        this.bodyPartsMap = bodyPartsMap;
        this.containedAncestors = containedAncestors;
        this.containedChildren = containedChildren;
        this.partOfAncestors = partOfAncestors;
        this.partOfChildren = partOfChildren;
    }

    /**
	 * Initializes the contained hierarchy.
	 * @param {AncestorsMap} containedAncestors - The contained ancestors.
	 * @param {ChildrenMap} containedChildren - The contained children. 
	 * @param {IBodyPart} item - The item.
	 */
    private static initContained (containedAncestors: AncestorsMap, containedChildren: ChildrenMap, item: IBodyPart): void {
        containedAncestors[item.radlexId] = item.containedById;
			
        if (!containedChildren[item.containedById]) {
            containedChildren[item.containedById] = [];
        }

        if (item.containedById !== item.radlexId) {
            containedChildren[item.containedById].push(item.radlexId);
        }
    }

    /**
	 * Initializes the partOf hierarchy.
	 * @param {AncestorsMap} partOfAncestors - The partOf ancestors.
	 * @param {ChildrenMap} partOfChildren - The partOf children. 
	 * @param {IBodyPart} item - The item.
	 */
	 private static initPartOf (partOfAncestors: AncestorsMap, partOfChildren: ChildrenMap, item: IBodyPart): void {
        if (!item.partOfId) return;

        partOfAncestors[item.radlexId] = item.partOfId;
			
        if (!partOfChildren[item.partOfId]) {
            partOfChildren[item.partOfId] = [];
        }

        if (item.partOfId !== item.radlexId) {
            partOfChildren[item.partOfId].push(item.radlexId);
        }
    }
	
}

export {
    BodyPartsData
};