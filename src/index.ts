import { configuration } from 'src/configuration';

export class AnatomicLocationLibrary {

    /**
 	 * Returns the library version (for debugging purposes).
	 */
    public getVersion (): string {
        return configuration.version;
    }

}

window.AnatomicLocationLibrary = new AnatomicLocationLibrary();

export { BodyPartIndex } from 'src/bodyParts';
export { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
export { Code } from 'src/bodyParts/bodyPart/code';