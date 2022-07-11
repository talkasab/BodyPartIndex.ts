import { IBodyPartsResponse } from 'src/bodyParts/interfaces/IBodyPartsResponse';
import { getBodyParts } from 'src/bodyParts/utils/data';

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

describe('getBodyParts()', () => {
    let result: IBodyPartsResponse;
    const fileMock = {
        $schema: 'SCHEMA',
        $version: '1.0.0',
        bodyParts: [ bodyPart1, bodyPart2, bodyPart3, bodyPart4, bodyPart5 ]
    };

    beforeEach(() => {
        result = getBodyParts(fileMock);
    });

    it ('returns the correct version', () => {
        expect(result.version).toBe('1.0.0');
    });

    it ('returns the correct codes', () => {
        expect(result.codes).toEqual({ 
            '78320081': [ 'RID901' ], 
            '78320082': [ 'RID902' ], 
            '78320083': [ 'RID903' ], 
            '78320085': [ 'RID905' ] 
        });
    });

    it ('returns the correct map', () => {
        expect(result.map).toEqual({ 
            'RID901': bodyPart1, 
            'RID902': bodyPart2,
            'RID903': bodyPart3,
            'RID904': bodyPart4,
            'RID905': bodyPart5
        });
    });

    it ('returns the correct contained ancestors', () => {
        expect(result.containedAncestors).toEqual({ 
            'RID901': 'RID901', 
            'RID902': 'RID901', 
            'RID903': 'RID901', 
            'RID904': 'RID903', 
            'RID905': 'RID904' 
        });
    });

    it ('returns the correct contained children', () => {
        expect(result.containedChildren).toEqual({ 
            'RID901': [ 'RID902', 'RID903' ],
            'RID903': [ 'RID904' ],
            'RID904': [ 'RID905' ]
        });
    });

    it ('returns the correct partOf ancestors', () => {
        expect(result.partOfAncestors).toEqual({ 
            'RID901': 'RID902',
            'RID904': 'RID902',
            'RID905': 'RID901'
        });
    });

    it ('returns the correct partOf children', () => {
        expect(result.partOfChildren).toEqual({ 
            'RID901': [ 'RID905' ],
            'RID902': [ 'RID901', 'RID904' ]
        });
    });

});