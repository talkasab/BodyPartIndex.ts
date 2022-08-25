import { IBodyPart, SexSpecific } from 'src/bodyParts/interfaces/IBodyPart';
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
	 * Returns the Radlex ID for the BodyPart.
	 */
    public getRadlexId (): string {
        return this.data.radlexId;
    }

    /**
	 * Returns the BodyPart description field.
	 */
    public getDescription (): string {
        return this.data.description;
    }

    /**
	 * Returns the BodyPart synonyms field.
	 */
    public getSynonyms (): string[] | undefined {
        return this.data.synonyms;
    }

    /**
	 * Returns the BodyPart sex specific field.
	 */
    public getSexSpecific (): SexSpecific | undefined {
        return this.data.sexSpecific;
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

    /**
	 * Returns if current BodyPart is equal to another one.
	 * @param {BodyPart | null | undefined} bodyPart - The body part.
	 */
    public isEqual (bodyPart: BodyPart | null | undefined): boolean {
        return JSON.stringify(this.data) === JSON.stringify(bodyPart?.getData());
    }
		
}