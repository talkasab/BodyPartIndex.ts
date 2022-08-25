import { ILocalCode } from 'src/bodyParts/interfaces/ILocalCode';
import { IBodyPartsFile } from './IBodyPartsFile';

export interface IConfiguration {
	bodyPartData?: IBodyPartsFile;
	localBodyPartMappings?: ILocalCode[];
}