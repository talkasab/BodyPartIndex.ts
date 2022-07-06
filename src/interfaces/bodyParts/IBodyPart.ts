import { ICode } from 'src/interfaces/bodyParts/ICode';

export interface IBodyPart {
	radlexId: string;
	description: string;
	containedById: string;
	synonyms?: string[];
	codes?: ICode[];
	partOfId?: string;
	leftId?: string;
	rightId?: string;
	unsidedId?: string;
	sexSpecific?: 'Male' | 'Female';
}