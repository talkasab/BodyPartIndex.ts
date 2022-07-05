import { BodyPartsData } from 'src/bodyParts/data';
import { BodyPart } from 'src/bodyParts/bodyPart';
import { configuration } from 'src/configuration';

class Index {

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

    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return configuration.version;
    }

}

const index = new Index();
const a = index.getById('RID56');
console.log(a?.getImmediateContainedChildren());

export {
    Index
};