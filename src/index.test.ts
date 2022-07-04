import { Dev } from 'src/build/dev';
import { Index } from 'src';

describe('First test case', () => {
    it('returns the correct result', () => {
        expect(Dev.getDev()).toBe('dev');
    });

    it('returns the correct result for Index', () => {
        expect(Index.getResult()).toBe('dev');
    });
});