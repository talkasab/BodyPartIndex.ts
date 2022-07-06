import { configuration } from 'src/configuration';
export { BodyPartIndex } from 'src/bodyParts';

export class AnatomicLocationLibrary {

    /**
 	 * Returns the anatomic location version (for debugging purposes).
	 */
    public getVersion (): string {
        return configuration.version;
    }

}

window.AnatomicLocationLibrary = new AnatomicLocationLibrary();