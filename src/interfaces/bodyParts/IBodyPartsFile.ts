import { IBodyPart } from 'src/interfaces/bodyParts/IBodyPart';

interface IBodyPartsFile {
	$schema: string;
	$version: string;
	bodyParts: IBodyPart[];
}

export {
    IBodyPartsFile
};