import { AnatomicLocationLibrary } from 'src';
export { BodyPartIndex } from 'src/bodyParts/index';
export { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
export { AnatomicLocationLibrary };

declare global {

	interface Window {

		/**
		 * The anatomic location library.
		 */
		AnatomicLocationLibrary: AnatomicLocationLibrary;

	}

	/**
	 * The library version.
	 */
	const __VERSION__: string;

}