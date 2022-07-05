import { Index } from 'src';

describe('Index', () => {
    it('returns the correct version', () => {
        expect(new Index().getVersion()).toBe('testVersion');
    });
});