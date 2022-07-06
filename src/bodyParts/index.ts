import { IBodyPartsResponse } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { getBodyParts } from 'src/bodyParts/utils/data';
import { configuration } from 'src/configuration';

export let BODY_PARTS: IBodyPartsResponse;

export class BodyPartIndex {

    /**
	 * Initializes the BodyPartIndex.
	 */
    public constructor () {
        BODY_PARTS = getBodyParts(configuration.file);
    }

    /**
	 * Returns a BodyPart object by radlexId.
	 * @param {string} radlexId - The radlexId.
	 */
    public getById (radlexId: string): BodyPart | null {
        const data = BODY_PARTS.bodyPartsMap[radlexId];

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
        
        for (const key in BODY_PARTS.bodyPartsMap) {
            const data = BODY_PARTS.bodyPartsMap[key];
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