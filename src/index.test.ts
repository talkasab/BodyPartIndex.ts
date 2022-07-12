import { AnatomicLocationLibrary, BodyPartIndex, BodyPart, Code } from 'src';

describe('AnatomicLocationLibrary', () => {
    it('returns the correct library version', () => {
        expect(new AnatomicLocationLibrary().getVersion()).toBe('testVersion');
    });

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