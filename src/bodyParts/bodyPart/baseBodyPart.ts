import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';
import { getBodyPartById } from 'src/bodyParts/utils/bodyPart';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { Code } from 'src/bodyParts/bodyPart/code';

export abstract class BaseBodyPart {

    /**
	 * Initializes the BodyPart.
	 * @param {IBodyPart} data - The data.
	 */
    public constructor (
		protected data: IBodyPart
    ) { }
	
    /**
	 * Returns the BodyPart data.
	 */
    public getData (): IBodyPart {
        return this.data;
    }

    /**
	 * Returns the containedBy id.
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
	 * Returns the partOf id.
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
	 * Returns the left id.
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
	 * Returns the right id.
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
	 * Returns the unsided id.
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

    /**
	 * Returns the codes.
	 */
    public getCodes (): Code[] {
        const codesData = this.data.codes || [];
        const codes: Code[] = [];

        codesData.forEach((data) => {
            codes.push(new Code(data));
        });

        return codes;
    }
		
}