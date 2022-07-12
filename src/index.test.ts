import { AnatomicLocationLibrary, BodyPartIndex } from 'src';

describe('AnatomicLocationLibrary', () => {

    it('returns the correct library version', () => {
        expect(new AnatomicLocationLibrary().getVersion()).toBe('testVersion');
    });

    it ('exports the BodyPartIndex correctly', () => {
        expect(BodyPartIndex).toEqual(BodyPartIndex);
    });

});