import { Index } from 'src';

describe('First test case', () => {
    it('returns the correct body part length', () => {
        expect(Index.getBodyPartsLength()).toBe(2842);
    });
});