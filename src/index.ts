export { BodyPart } from 'src/bodyParts/bodyPart';
import { configuration } from 'src/configuration';

export class AnatomicLocationLibrary {

    /**
 	 * Returns the anatomic location version (for debugging purposes).
	 */
    public getVersion (): string {
        return configuration.version;
    }

}

window.AnatomicLocationLibrary = new AnatomicLocationLibrary();