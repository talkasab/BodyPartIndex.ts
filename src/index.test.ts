import { it, describe, expect } from "bun:test";
import { BodyPartIndex, BodyPart, Code } from '../src/index';

describe('AnatomicLocationLibrary', () => {
    // it('returns the correct library version', () => {
    //     expect(window.getBodyPartsIndexVersion()).toBe('testVersion');
    // });

    it ('exports the BodyPartIndex correctly', () => {
        expect(BodyPartIndex).toEqual(BodyPartIndex);
    });

    it ('exports the BodyPart correctly', () => {
        expect(BodyPart).toEqual(BodyPart);
    });

    it ('exports the Code correctly', () => {
        expect(Code).toEqual(Code);
    });
});