import { ICode } from 'src/bodyParts/interfaces/ICode';

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