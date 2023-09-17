import { IBodyPart } from '../interfaces/IBodyPart';
import { ICode } from '../interfaces/ICode';

export type AncestorsMap = { [key: string]: string };
export type ChildrenMap = { [key: string]: string[] };
export type BodyPartsMap = { [ key: string]: IBodyPart };
export type LocalCodesMap = { [key: string]: ICode[] };
export type CodesMap = { [key: string]: string[] };

export interface IBodyPartsResponse {
	codes: CodesMap;
	version: string;
	map: BodyPartsMap;
	containedAncestors: AncestorsMap;
    containedChildren: ChildrenMap;
    partOfAncestors: AncestorsMap;
    partOfChildren: ChildrenMap;
}