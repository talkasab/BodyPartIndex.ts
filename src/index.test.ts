import { AnatomicLocationLibrary } from 'src';

describe('AnatomicLocationLibrary', () => {

    it('returns the correct version', () => {
        expect(new AnatomicLocationLibrary().getVersion()).toBe('testVersion');
    });

});