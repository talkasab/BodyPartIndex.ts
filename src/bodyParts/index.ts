import { IBodyPartsResponse } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { IConfiguration } from 'src/bodyParts/interfaces/IConfiguration';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { getBodyParts } from 'src/bodyParts/utils/data';
import { configuration } from 'src/configuration';

export let BODY_PARTS: IBodyPartsResponse;

export class BodyPartIndex {

    /**
	 * Initializes the BodyPartIndex.
	 * @param {IConfiguration?} config - The local configuration.
	 */
    public constructor (config?: IConfiguration) {
        this.setUpConfiguration(config);
    }

    /**
	 * Sets up the configuration.
	 * @param {IConfiguration?} config - The local configuration.
	 */
    public setUpConfiguration (config?: IConfiguration): void {
        BODY_PARTS = getBodyParts(configuration.file, config);
    }

    /**
	 * Returns a BodyPart that matches a selector.
	 * @param {string} selector - The selector.
	 */
    public get (selector: string): BodyPart | null {
        let bodyPart = this.getById(selector);
        if (bodyPart) {
            return bodyPart;
        }

        bodyPart = this.getByCode(selector);
        if (bodyPart) {
            return bodyPart;
        }

        return null;
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
        
        for (const key in BODY_PARTS.map) {
            const data = BODY_PARTS.map[key];
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

    /**
	 * Returns a BodyPart by radlexId.
	 * @param {string} radlexId - The radlexId.
	 */
    private getById (radlexId: string): BodyPart | null {
        const data = BODY_PARTS.map[radlexId];
	
        if (!data) {
            return null;
        }
	
        return new BodyPart(data);
    }
	
    /**
	 * Returns a BodyPart by code.
	 * @param {string} code - The code.
	 */
    private getByCode (code: string): BodyPart | null {
        const radlexIds = BODY_PARTS.codes[code];
        if (!radlexIds?.length) {
            return null;
        }
	
			
        const data = BODY_PARTS.map[radlexIds[0]];
        if (!data) {
            return null;
        }
	
        return new BodyPart(data);
    }

}