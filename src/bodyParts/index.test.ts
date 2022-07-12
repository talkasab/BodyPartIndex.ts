import { BodyPartIndex, BODY_PARTS } from 'src/bodyParts/index';
import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { configuration } from 'src/configuration';

const bodyPart1 = {
    codes: [ { code: '78320081', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: 'hand',
    partOfId: 'RID902',
    radlexId: 'RID901'
};

const bodyPart2 = {
    codes: [ { code: '78320082', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: 'feet',
    radlexId: 'RID902'
};

const bodyPart3 = {
    codes: [ { code: '78320083', system: 'SNOMED' } ],
    containedById: 'RID901',
    description: 'leg',
    radlexId: 'RID903',
    synonyms: [
        'feet'
    ]
};

const bodyPart4 = {
    containedById: 'RID903',
    description: 'eye',
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
    description: 'finger',
    partOfId: 'RID901',
    radlexId: 'RID905'
};

const fileMock = {
    $schema: 'MY_SCHEMA',
    $version: '2.0.0',
    bodyParts: [ bodyPart1, bodyPart2, bodyPart3, bodyPart4, bodyPart5 ]
};

describe('setUpConfiguration()', () => {

    beforeEach(() => {
        configuration.file = fileMock;
        new BodyPartIndex({
            localBodyPartMappings: [
                {
                    localCode: {
                        code: 'AAABBBCC',
                        system: 'LOCAL'
                    },
                    radlexId: 'RID901'
                }
            ]
        });
    });

    it ('matches the BODY_PARTS object', () => {
        expect(BODY_PARTS).toMatchSnapshot();
    });

});

describe('get()', () => {
    let index: BodyPartIndex;

    beforeEach(() => {
        configuration.file = fileMock;
        index = new BodyPartIndex({
            localBodyPartMappings: [
                {
                    localCode: {
                        code: 'AAABBBCC',
                        system: 'LOCAL'
                    },
                    radlexId: 'RID901'
                },
                {
                    localCode: {
                        code: 'EEEFFFGGGHHH',
                        system: 'LOCAL'
                    },
                    // Non-existing BodyPart
                    radlexId: 'RID901222'
                }
            ]
        });
    });

    it ('returns null for non-existing radlexId', () => {
        expect(index.get('RID9052')).toEqual(null);
    });

    it ('returns the correct BodyPart by radlexId', () => {
        expect(index.get('RID905')).toEqual(new BodyPart(bodyPart5));
    });

    it ('returns the correct BodyPart by code', () => {
        expect(index.get('78320083')).toEqual(new BodyPart(bodyPart3));
    });

    it ('returns the correct BodyPart by local code', () => {
        expect(index.get('AAABBBCC')).toEqual(
            new BodyPart({ 
                ...bodyPart1, 
                codes: [
                    ...bodyPart1.codes,
                    {
                        code: 'AAABBBCC',
                        system: 'LOCAL'
                    }
                ] 
            })
        );
    });

});

describe('search()', () => {
    let index: BodyPartIndex;

    beforeEach(() => {
        configuration.file = fileMock;
        index = new BodyPartIndex();
    });

    it ('returns empty array for searchValue less than 3', () => {
        expect(index.search('av')).toEqual([]);
    });

    it ('returns the correct BodyPart (eye)', () => {
        expect(index.search('eye')).toEqual([ new BodyPart(bodyPart4) ]);
    });

    it ('returns the correct BodyPart (eye)', () => {
        expect(index.search('aaa')).toEqual([ new BodyPart(bodyPart4) ]);
    });

    it ('returns the correct BodyParts (feet)', () => {
        expect(index.search('feet')).toEqual([ 
            new BodyPart(bodyPart2), 
            new BodyPart(bodyPart3) 
        ]);
    });

    it ('returns empty array when no BodyParts are found', () => {
        expect(index.search('feet2')).toEqual([]);
    });
});