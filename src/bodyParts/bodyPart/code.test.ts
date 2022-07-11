import { Code } from 'src/bodyParts/bodyPart/code';

describe('Code class', () => {
    let code: Code;

    beforeEach(() => {
        code = new Code({
            code: 'CODE',
            system: 'SYSTEM'
        });
    });

    it('returns the correct code', () => {
        expect(code.getCode()).toBe('CODE');
    });

    it('returns the correct system', () => {
        expect(code.getSystem()).toBe('SYSTEM');
    });
});