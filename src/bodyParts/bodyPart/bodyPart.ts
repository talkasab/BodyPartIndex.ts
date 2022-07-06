import { BodyPartsMap, transformMapToBodyParts } from 'src/bodyParts/utils/bodyPart';
import { BaseBodyPart } from 'src/bodyParts/bodyPart/baseBodyPart';
import { BODY_PARTS } from 'src/bodyParts';

export class BodyPart extends BaseBodyPart {

    /**
	 * Returns the immediate contained children.
	 */
    public getImmediateContainedChildren (): BodyPart[] {
        return this.getAllContainedChildren(1);
    }

    /**
	 * Returns the children.
	 * @param {number} depth - The depth (if specified will return children up to that level).
	 */
	 public getAllContainedChildren (depth = -1): BodyPart[] {
        const immediateChildren = BODY_PARTS.containedChildren[this.data.radlexId];
        const map: BodyPartsMap = {};
		
        if (!immediateChildren) {
            return [];
        }

        const traverse = (children: string[], current: number): void => {
            children.forEach(child => {
                map[child] = true;
            });

            if (depth !== -1 && current >= depth) {
                return;
            }
			
            children.forEach(child => {
                const nextChildren = BODY_PARTS.containedChildren[child];
                if (nextChildren) {
                    traverse(nextChildren, current + 1);
                }
            });
        };

        traverse(immediateChildren, 1);

        return transformMapToBodyParts(map);
    }

    /**
	 * Returns all the contained ancestors.
	 */
    public getAllContainedAncestors (): BodyPart[] {
        let last = BODY_PARTS.containedAncestors[this.data.radlexId];
        const map: BodyPartsMap = {};

        while (last && !map[last]) {
            map[last] = true;
            last = BODY_PARTS.containedAncestors[last];
        }

        return transformMapToBodyParts(map);
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