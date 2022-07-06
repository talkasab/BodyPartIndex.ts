import { AnatomicLocationLibrary } from 'src';
export { BodyPart } from 'src/bodyParts/bodyPart';

declare global {

	interface Window {

		/**
		 * The anatomic location library.
		 */
		AnatomicLocationLibrary: AnatomicLocationLibrary;

	}

	/**
	 * The version.
	 */
	const __VERSION__: string;

}