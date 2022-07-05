import { IBodyPart } from 'src/interfaces/bodyParts/IBodyPart';
import { BodyPartsMap, BodyPartsUtils } from 'src/bodyParts/utils';
import { BodyPartsData } from 'src/bodyParts/data';

class BodyPart {

    /**
	 * Initializes the BodyPart.
	 * @param {IBodyPart} data - The data.
	 */
    public constructor (
		private data: IBodyPart
    ) { }

    /**
	 * Returns the data.
	 */
    public getData (): IBodyPart {
        return this.data;
    }

    /**
	 * Returns the immediate contained children.
	 */
    public getImmediateContainedChildren (): BodyPart[] {
        return this.getAllContainedChildren(1);
    }

    /**
	 * Returns the children.
	 * @param {number} maxLevel - The maxLevel (if specified will return children up to that level).
	 */
	 public getAllContainedChildren (maxLevel = -1): BodyPart[] {
        const immediateChildren = BodyPartsData.containedChildren[this.data.radlexId];
        const map: BodyPartsMap = {};
		
        if (!immediateChildren) return [];

        const traverse = (children: string[], current: number): void => {
            children.forEach(child => {
                map[child] = true;
            });

            if (maxLevel !== -1 && current >= maxLevel) {
                return;
            }
			
            children.forEach(child => {
                const nextChildren = BodyPartsData.containedChildren[child];
                if (nextChildren) {
                    traverse(nextChildren, current + 1);
                }
            });
        };

        traverse(immediateChildren, 1);

        return BodyPartsUtils.transformMap(map);
    }

    /**
	 * Returns all the contained ancestors.
	 */
    public getAllContainedAncestors (): BodyPart[] {
        let last = BodyPartsData.containedAncestors[this.data.radlexId];
        const map: BodyPartsMap = {};

        while (last && !map[last]) {
            map[last] = true;
            last = BodyPartsData.containedAncestors[last];
        }

        return BodyPartsUtils.transformMap(map);
    }

    /**
	 * Returns if the bodyPart is a descendant of a parent.
	 * @param {string} parentRadlexId - The parent radlex id.
	 */
    public isContained (parentRadlexId: string): boolean {
        const allAncestors = this.getAllContainedAncestors();
        
        for (let i = 0; i < allAncestors.length; i++) {
            if (allAncestors[i].getData().radlexId === parentRadlexId) {
                return true;
            }
        }

        return false;
    }

}

export {
    BodyPart
};