import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';
import { getBodyPartById } from 'src/bodyParts/utils/bodyPart';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';

export abstract class BaseBodyPart {

    /**
	 * Initializes the BodyPart.
	 * @param {IBodyPart} data - The data.
	 */
    public constructor (
		protected data: IBodyPart
    ) { }
	
    /**
	 * Returns the body part data.
	 */
    public getData (): IBodyPart {
        return this.data;
    }

    /**
	 * Returns the containedById.
	 */
    public getContainedById (): string {
        return this.data.containedById;
    }

    /**
	 * Returns the containedBy BodyPart.
	 */
    public getContainedBy (): BodyPart {
        return getBodyPartById(this.getContainedById()) as BodyPart;
    }

    /**
	 * Returns the containedById.
	 */
    public getPartOfId (): string | null {
        return this.data.partOfId || null;
    }

    /**
	 * Returns the partOf BodyPart.
	 */
    public getPartOf (): BodyPart | null {
        return getBodyPartById(this.getPartOfId());
    }

    /**
	 * Returns the leftId.
	 */
    public getLeftId (): string | null {
        return this.data.leftId || null;
    }

    /**
	 * Returns the left BodyPart.
	 */
    public getLeft (): BodyPart | null {
        return getBodyPartById(this.getLeftId());
    }

    /**
	 * Returns the rightId.
	 */
    public getRightId (): string | null {
        return this.data.rightId || null;
    }
	
    /**
	 * Returns the right BodyPart.
	 */
    public getRight (): BodyPart | null {
        return getBodyPartById(this.getRightId());
    }

    /**
	 * Returns the unsidedId.
	 */
	 public getUnsidedId (): string | null {
        return this.data.unsidedId || null;
    }
	
    /**
	 * Returns the unsided BodyPart.
	 */
    public getUnsided (): BodyPart | null {
        return getBodyPartById(this.getUnsidedId());
    }
		
}