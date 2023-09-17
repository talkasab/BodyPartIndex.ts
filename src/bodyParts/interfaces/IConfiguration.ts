import { ILocalCode } from '../../bodyParts/interfaces/ILocalCode';
import { IBodyPartsFile } from './IBodyPartsFile';

export interface IConfiguration {
	bodyPartData?: IBodyPartsFile;
	localBodyPartMappings?: ILocalCode[];
}