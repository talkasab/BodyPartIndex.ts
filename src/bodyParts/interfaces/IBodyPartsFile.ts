import { IBodyPart } from '../../bodyParts/interfaces/IBodyPart';

export interface IBodyPartsFile {
	$schema: string;
	$version: string;
	bodyParts: IBodyPart[];
}