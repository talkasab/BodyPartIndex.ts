import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { BodyPartsData } from 'src/bodyParts/data';
import { configuration } from 'src/configuration';

export class BodyPartIndex {

    /**
	 * Initializes the BodyPartIndex.
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

    /**
	 * Returns the BodyParts that have a description or synonyms corresponding to a search value.
	 * @param {string} searchValue - The search value.
	 */
    public search (searchValue: string): BodyPart[] {
        const bodyParts = [];

        if (searchValue.length < 4) {
            return [];
        }
        
        for (const key in BodyPartsData.bodyPartsMap) {
            const data = BodyPartsData.bodyPartsMap[key];
            const bodyPartTerms = [
                data.description,
                ...data.synonyms || []
            ].join(' ');

            if (bodyPartTerms.indexOf(searchValue) !== -1) {
                const bodyPart = new BodyPart(data);
                bodyParts.push(bodyPart);
            }
        }

        return bodyParts;
    }

}

const index = new BodyPartIndex();
const a = index.search('cuneiform');
console.log(a);