import { BodyPartsData } from 'src/bodyParts/data';
import { BodyPart } from 'src/bodyParts/bodyPart';
import { configuration } from 'src/configuration';

export class BodyPartIndex {

    /**
	 * Initializes the index.
	 */
    public constructor () {
        BodyPartsData.init(configuration.file);
    }

    /**
	 * Returns a BodyPart object by radlexId.
	 * @param {string} radlexId - The radlexId.
	 */
    public getById (radlexId: string): BodyPart | null {
        const data = BodyPartsData.bodyPartsMap[radlexId];

        if (!data) {
            return null;
        }

        return new BodyPart(data);
    }

}

const index = new BodyPartIndex();
const a = index.getById('RID56');
console.log(a?.getImmediateContainedChildren());