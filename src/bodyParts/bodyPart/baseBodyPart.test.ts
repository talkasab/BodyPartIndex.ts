import { IBodyPart } from 'src/bodyParts/interfaces/IBodyPart';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { ICode } from 'src/bodyParts/interfaces/ICode';
import { Code } from 'src/bodyParts/bodyPart/code';
import { mockBodyParts } from 'src/tests/utils';

const code1: ICode = {
    code: '265256',
    system: 'FMA'
};

const code2: ICode = {
    code: '23043003',
    system: 'SNOMED'
};

const code3: ICode = {
    code: 'C0001575',
    system: 'UMLS'
};

const bodyPart1: IBodyPart = {
    codes: [ code1, code2, code3 ],
    containedById: 'RID2507',
    description: 'uterine adnexa',
    leftId: 'RID294_RID5824',
    partOfId: 'RID270',
    radlexId: 'RID294',
    rightId: 'RID294_RID5825',
    sexSpecific: 'Female',
    synonyms: [ 'adnexa' ],
    unsidedId: 'RID300'
};

const bodyPartContainedById = {
    containedById: '',
    description: '',
    radlexId: 'RID2507'
};

const bodyPartLeftId = {
    containedById: '',
    description: '',
    radlexId: 'RID294_RID5824'
};

const bodyPartPartOfId = {
    containedById: '',
    description: '',
    radlexId: 'RID270'
};

const bodyPartRightId = {
    containedById: '',
    description: '',
    radlexId: 'RID294_RID5825'
};

const bodyPartUnsided = {
    containedById: '',
    description: '',
    radlexId: 'RID300'
};
  
describe('BaseBodyPart', () => {
    let bodyPart: BodyPart;

    beforeEach(() => {
        mockBodyParts({
            map: {
                'RID2507': bodyPartContainedById,
                'RID270': bodyPartPartOfId,
                'RID294': bodyPart1,
                'RID294_RID5824': bodyPartLeftId,
                'RID294_RID5825': bodyPartRightId,
                'RID300': bodyPartUnsided
            }
        });
        bodyPart = new BodyPart(bodyPart1);
    });

    it('returns the correct data', () => {
        expect(bodyPart.getData()).toBe(bodyPart1);
    });

    it('returns the correct radlex id', () => {
        expect(bodyPart.getRadlexId()).toBe('RID294');
    }),

    it('returns the correct contained id', () => {
        expect(bodyPart.getContainedById()).toBe(bodyPart1.containedById);
    });

    it('returns the correct contained BodyPart', () => {
        expect(bodyPart.getContainedBy()).toEqual(new BodyPart(bodyPartContainedById));
    });

    it('returns the correct partOf id', () => {
        expect(bodyPart.getPartOfId()).toBe(bodyPart1.partOfId);
    });

    it('returns the correct partOf BodyPart', () => {
        expect(bodyPart.getPartOf()).toEqual(new BodyPart(bodyPartPartOfId));
    });

    it('returns the correct left id', () => {
        expect(bodyPart.getLeftId()).toBe(bodyPart1.leftId);
    });

    it('returns the correct left BodyPart', () => {
        expect(bodyPart.getLeft()).toEqual(new BodyPart(bodyPartLeftId));
    });

    it('returns the correct right id', () => {
        expect(bodyPart.getRightId()).toBe(bodyPart1.rightId);
    });

    it('returns the correct right BodyPart', () => {
        expect(bodyPart.getRight()).toEqual(new BodyPart(bodyPartRightId));
    });

    it('returns the correct unsidedId id', () => {
        expect(bodyPart.getUnsidedId()).toBe(bodyPart1.unsidedId);
    });

    it('returns the correct description value', () => {
        expect(bodyPart.getDescription()).toBe(bodyPart1.description);
    });

    it('returns the correct synonyms value', () => {
        expect(bodyPart.getSynonyms()).toBe(bodyPart1.synonyms);
    });

    it('returns the correct sexSpecific value', () => {
        expect(bodyPart.getSexSpecific()).toBe(bodyPart1.sexSpecific);
    });

    it('returns the correct unsidedId BodyPart', () => {
        expect(bodyPart.getUnsided()).toEqual(new BodyPart(bodyPartUnsided));
    });


    it('returns if bodyPart is equal to another one', () => {
        expect(bodyPart.isEqual(new BodyPart(bodyPart1))).toEqual(true);
    });

    it('returns if bodyPart is not-equal to another one', () => {
        expect(bodyPart.isEqual(null)).toEqual(false);
    });

    it('returns the correct codes', () => {
        expect(bodyPart.getCodes()).toEqual([
            new Code(code1),
            new Code(code2),
            new Code(code3)
        ]);
    });
});

describe('BaseBodyPart with non-existing properties', () => {
    let bodyPart: BodyPart;

    beforeEach(() => {
        mockBodyParts({
            map: {}
        });
        bodyPart = new BodyPart(bodyPartContainedById);
    });

    it('returns null for non-existing partOf id', () => {
        expect(bodyPart.getPartOfId()).toEqual(null);
    });

    it('returns null for non-existing left id', () => {
        expect(bodyPart.getLeftId()).toEqual(null);
    });

    it('returns null for non-existing right id', () => {
        expect(bodyPart.getRightId()).toEqual(null);
    });

    it('returns null for non-existing unsided id', () => {
        expect(bodyPart.getUnsidedId()).toEqual(null);
    });

    it('returns empty array for non-existing codes', () => {
        expect(bodyPart.getCodes()).toEqual([]);
    });
});