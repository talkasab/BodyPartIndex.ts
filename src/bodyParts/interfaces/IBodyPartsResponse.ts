import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';
import { ICode } from 'src/bodyParts/interfaces/ICode';

export type AncestorsMap = { [key: string]: string };
export type ChildrenMap = { [key: string]: string[] };
export type BodyPartsMap = { [ key: string]: IBodyPart };
export type LocalCodesMap = { [key: string]: ICode[] };

export interface IBodyPartsResponse {
	version: string;
	map: BodyPartsMap;
	containedAncestors: AncestorsMap;
    containedChildren: ChildrenMap;
    partOfAncestors: AncestorsMap;
    partOfChildren: ChildrenMap;
}