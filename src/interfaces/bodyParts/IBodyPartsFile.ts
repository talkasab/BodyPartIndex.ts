import { IBodyPart } from 'src/interfaces/bodyParts/IBodyPart';

export interface IBodyPartsFile {
	$schema: string;
	$version: string;
	bodyParts: IBodyPart[];
}