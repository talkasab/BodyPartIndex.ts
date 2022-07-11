import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { getBodyPartById, transformMapToBodyParts } from 'src/bodyParts/utils/bodyPart';
import { mockBodyParts } from 'src/tests/utils';

const radlexIdAAA = {
    containedById: '',
    description: '',
    radlexId: 'radlexIdAAA'
};
const radlexIdBBB = {
    containedById: '',
    description: '',
    radlexId: 'radlexIdBBB'
};
const radlexIdCCC = {
    containedById: '',
    description: '',
    radlexId: 'radlexIdCCC'
};

describe('transformMapToBodyParts()', () => {
    let result: BodyPart[];

    beforeEach(() => {
        mockBodyParts({
            map: {
                radlexIdAAA,
                radlexIdBBB,
                radlexIdCCC
            }
        });

        result = transformMapToBodyParts({
            radlexIdAAA: true,
            radlexIdBBB: false,
            radlexIdCCC: true
        });
    });

    it('returns the correct BodyParts', () => {
        expect(result).toEqual([
            new BodyPart(radlexIdAAA),
            new BodyPart(radlexIdCCC)
        ]);
    });
});

describe('getBodyPartById()', () => {
    beforeEach(() => {
        mockBodyParts({
            map: {
                radlexIdAAA,
                radlexIdBBB,
                radlexIdCCC
            }
        });
    });

    it('returns null for incorrect id', () => {
        expect(getBodyPartById('')).toBe(null);
    });

    it('returns null for non-existent id', () => {
        expect(getBodyPartById('radlexIdDDD')).toBe(null);
    });

    [ 
        { key: 'radlexIdAAA', value: radlexIdAAA }, 
        { key: 'radlexIdBBB', value: radlexIdBBB }, 
        { key: 'radlexIdCCC', value: radlexIdCCC } 
    ].forEach ((obj) => {
        it (`returns the correct BodyPart for ${obj.key}`, () => {
            expect(getBodyPartById(obj.key)).toEqual(new BodyPart(obj.value));
        });
    });
});