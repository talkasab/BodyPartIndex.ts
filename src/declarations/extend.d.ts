export { BodyPartIndex } from 'src/bodyParts/index';
export { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';

declare global {

	interface Window {

		/**
		 * Returns the library version (for debugging purposes).
		 */
		 getBodyPartsIndexVersion: () => string;

	}

	/**
	 * The library version.
	 */
	const __VERSION__: string;

}