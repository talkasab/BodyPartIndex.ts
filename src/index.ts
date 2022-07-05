import { BodyPartsData } from 'src/bodyParts/data/bodyPartsData';
import { configuration } from './configuration';

class Index {

    /**
	 * Initializes the index.
	 */
    public constructor() {
        BodyPartsData.init(configuration.file);
    }

    /**
	 *
	 * @param id
	 */
    public get (id: string): void {
        let lastContainedBy = BodyPartsData.containedByIds[id];
        const containedByIdsAll: { [key: string]: boolean } = {};
        while (lastContainedBy && !containedByIdsAll[lastContainedBy]) {
            containedByIdsAll[lastContainedBy] = true;
            lastContainedBy = BodyPartsData.containedByIds[lastContainedBy];
        }
		
        console.log(containedByIdsAll);
    }

    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return configuration.version;
    }

}

const index = new Index();
index.get('RID56');

export {
    Index
};