import { ChildrenMap, AncestorsMap } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { BodyPartsMap, transformMapToBodyParts } from 'src/bodyParts/utils/bodyPart';
import { BaseBodyPart } from 'src/bodyParts/bodyPart/baseBodyPart';
import { BODY_PARTS } from 'src/bodyParts';

export class BodyPart extends BaseBodyPart {

    /**
	 * Returns the immediate contained children.
	 */
    public getImmediateContainedChildren (): BodyPart[] {
        return this.getChildren(BODY_PARTS.containedChildren, 1);
    }

    /**
	 * Returns all the contained children.
	 */
    public getAllContainedChildren (): BodyPart[] {
        return this.getChildren(BODY_PARTS.containedChildren);
    }

    /**
	 * Returns all the contained ancestors.
	 */
    public getAllContainedAncestors (): BodyPart[] {
        return this.getAllAncestors(BODY_PARTS.containedAncestors);
    }

    /**
	 * Returns if the bodyPart is a contained descendant of a parent.
	 * @param {string} parentRadlexId - The parent radlex id.
	 */
    public isContained (parentRadlexId: string): boolean {
        return this.isDescendant(parentRadlexId, this.getAllContainedAncestors());
    }

    /**
	 * Returns the immediate partOf children.
	 */
    public getImmediatePartOfChildren (): BodyPart[] {
        return this.getChildren(BODY_PARTS.partOfChildren, 1);
    }

    /**
	 * Returns all the partOf children.
	 */
    public getAllPartOfChildren (): BodyPart[] {
        return this.getChildren(BODY_PARTS.partOfChildren);
    }

    /**
	 * Returns all the parOf ancestors.
	 */
    public getAllPartOfAncestors (): BodyPart[] {
        return this.getAllAncestors(BODY_PARTS.partOfAncestors);
    }

    /**
	 * Returns if the bodyPart is a parOf descendant of a parent.
	 * @param {string} parentRadlexId - The parent radlex id.
	 */
    public isPartOf (parentRadlexId: string): boolean {
        return this.isDescendant(parentRadlexId, this.getAllPartOfAncestors());
    }

    /**
	 * Returns the children.
	 * @param {ChildrenMap} children - The children.
	 * @param {number} depth - The depth (if specified will return children up to that level).
	 */
    private getChildren (children: ChildrenMap, depth = -1): BodyPart[] {
        const immediateChildren = children[this.data.radlexId];
        const map: BodyPartsMap = {};
		
        if (!immediateChildren) {
            return [];
        }

        const traverse = (row: string[], current: number): void => {
            row.forEach(child => {
                map[child] = true;
            });

            if (depth !== -1 && current >= depth) {
                return;
            }
			
            row.forEach(child => {
                const nextChildren = children[child];
                if (nextChildren) {
                    traverse(nextChildren, current + 1);
                }
            });
        };

        traverse(immediateChildren, 1);

        return transformMapToBodyParts(map);
    }

    /**
	 * Returns all the ancestors.
	 * @param {AncestorsMap} ancestors - The ancestors.
	 */
    private getAllAncestors (ancestors: AncestorsMap): BodyPart[] {
        let last = ancestors[this.data.radlexId];
        const map: BodyPartsMap = {};

        while (last && !map[last]) {
            map[last] = true;
            last = ancestors[last];
        }

        if (map[this.data.radlexId]) {
            delete map[this.data.radlexId];
        }

        return transformMapToBodyParts(map);
    }

    /**
	 * Returns if the bodyPart is a descendant of a parent.
	 * @param {string} parentRadlexId - The parent radlex id.
	 * @param {BodyPart[]} ancestors - The ancestors.
	 */
    private isDescendant (parentRadlexId: string, ancestors: BodyPart[]): boolean {      
        for (let i = 0; i < ancestors.length; i++) {
            if (ancestors[i].getData().radlexId === parentRadlexId) {
                return true;
            }
        }

        return false;
    }

}