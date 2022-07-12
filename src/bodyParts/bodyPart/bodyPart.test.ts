import { getBodyParts } from 'src/bodyParts/utils/data';
import { mockBodyParts } from 'src/tests/utils';
import { BodyPart } from './bodyPart';

const bodyPart1 = {
    codes: [ { code: '78320081', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: '',
    partOfId: 'RID902',
    radlexId: 'RID901'
};

const bodyPart2 = {
    codes: [ { code: '78320082', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: '',
    radlexId: 'RID902'
};

const bodyPart3 = {
    codes: [ { code: '78320083', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: '',
    radlexId: 'RID903'
};

const bodyPart4 = {
    containedById: 'RID903',
    description: '',
    partOfId: 'RID902',
    radlexId: 'RID904',
    synonyms: [
        'aaa',
        'ccc'
    ]
};

const bodyPart5 = {
    codes: [ { code: '78320085', system: 'SNOMED' } ],
    containedById: 'RID904',
    description: '',
    partOfId: 'RID901',
    radlexId: 'RID905'
};

const fileMock = {
    $schema: 'SCHEMA',
    $version: '1.0.0',
    bodyParts: [ bodyPart1, bodyPart2, bodyPart3, bodyPart4, bodyPart5 ]
};

describe('BodyPart with contained children', () => {
    beforeEach(() => {
        mockBodyParts(getBodyParts(fileMock));
    });

    it ('returns the correct immediate contained children', () => {
        expect(new BodyPart(bodyPart1).getImmediateContainedChildren()).toEqual([
            new BodyPart(bodyPart2),
            new BodyPart(bodyPart3)
        ]);
    });

    it ('returns the correct contained children', () => {
        expect(new BodyPart(bodyPart1).getAllContainedChildren()).toEqual([
            new BodyPart(bodyPart2),
            new BodyPart(bodyPart3),
            new BodyPart(bodyPart4),
            new BodyPart(bodyPart5)
        ]);
    });

    it ('returns empty array when no children', () => {
        expect(new BodyPart(bodyPart5).getImmediateContainedChildren()).toEqual([]);
    });
});

describe('BodyPart with contained ancestors', () => {
    beforeEach(() => {
        mockBodyParts(getBodyParts(fileMock));
    });

    it ('returns the correct contained ancestors', () => {
        expect(new BodyPart(bodyPart5).getAllContainedAncestors()).toEqual([
            new BodyPart(bodyPart4),
            new BodyPart(bodyPart3),
            new BodyPart(bodyPart1)
        ]);
    });

    it ('returns the correct result (has valid ancestor with radlexId)', () => {
        expect(new BodyPart(bodyPart5).isContained(bodyPart1.radlexId)).toEqual(true);
    });

    it ('returns the correct result (has valid ancestor with BodyPart)', () => {
        expect(new BodyPart(bodyPart5).isContained(new BodyPart(bodyPart3))).toEqual(true);
    });

    it ('returns the correct result (no valid ancestor)', () => {
        expect(new BodyPart(bodyPart5).isContained(new BodyPart(bodyPart2))).toEqual(false);
    });
});