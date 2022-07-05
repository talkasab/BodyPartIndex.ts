import { BodyPartsData } from 'src/bodyParts/data/bodyPartsData';
import { configuration } from './configuration';

class Index {

    /**
	 * Initializes the index.
	 */
    public constructor () {
        BodyPartsData.init(configuration.file);
    }

    /**
	 * Returns the parents.
	 * @param {string} id - The id.
	 */
    public getParents (id: string): void {
        let last = BodyPartsData.containedAncestors[id];
        const containedParents: { [key: string]: boolean } = {};
        while (last && !containedParents[last]) {
            containedParents[last] = true;
            last = BodyPartsData.containedAncestors[last];
        }
		
        console.log(containedParents);
    }

    /**
	 * Returns the children.
	 * @param {string} id - The id.
	 */
	 public getChildren (id: string): void {
        let last = BodyPartsData.containedAncestors[id];
        const containedParents: { [key: string]: boolean } = {};
        while (last && !containedParents[last]) {
            containedParents[last] = true;
            last = BodyPartsData.containedAncestors[last];
        }
		
        console.log(containedParents);
    }

    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return configuration.version;
    }

}

const index = new Index();
index.getParents('RID56');

export {
    Index
};