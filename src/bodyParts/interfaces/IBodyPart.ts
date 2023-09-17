import { ICode } from '../../bodyParts/interfaces/ICode';

export type SexSpecific = 'Male' | 'Female';

export interface IBodyPart {

	/**
	 * The identifier/primary key for the list of body part objects, the same as the ID of that concept in the RadLex ontology.
	 */
	radlexId: string;

	/**
	 * The prefer representation of the concept as specified in the RadLex ontology.
	 */
	description: string;

	/**
	 * The identifier of the broader, containing (in a spatial sense). Could be thought of as "located in". 
	 * Points to another body part in the index. Forms a hierarchy.
	 */
	containedById: string;

	/**
	 * Pipe-separated list of alternate terms, sourced from the RadLex ontology. 
	 * Some German language terms have been removed, and some additional terms have been added.
	 */
	synonyms?: string[];

	/**
	 * Associations of a body part with other coding systems.
	 */
	codes?: ICode[];

	/**
	 * A secondary hierarchy based on composition rather than location.
	 */
	partOfId?: string;

	/**
	 * Provides a connection between the undifferentiated version of the entity (LEFT).
	 */
	leftId?: string;

	/**
	 * Provides a connection between the undifferentiated version of the entity (RIGHT).
	 */
	rightId?: string;

	/**
	 * Provides a connection between the undifferentiated version of the entity (UNSIDED).
	 */
	unsidedId?: string;

	/**
	 * Returns if body part is sex specific.
	 */
	sexSpecific?: SexSpecific;

}