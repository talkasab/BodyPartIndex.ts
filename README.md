# AnatomicLocations

Provides data and simple libraries for manipulating a standard list of anatomic locations.

## Installation

```console
npm i @talkasab/body_part_index
```

# `BodyPartIndex` (Scenarios)

## How to open the library?

To open the library, you first need to import it into your project. Then, you can use the `BodyPartIndex` object.

```typescript
import { BodyPartIndex } from '@talkasab/body_part_index';

const index = new BodyPartIndex();
```

## How to add local codes?

To add local codes to the library, you need to pass a JSON with the data linking the code to the radlexId.

```typescript
const index = new BodyPartIndex({
    localBodyPartMappings: [
        {

            localCode: {
                code: '3110',
                system: 'StElsewhere'
            },
            radlexId: 'RID56'
        },
        {

            localCode: {
                code: '31129',
                system: 'StElsewhere'
            },
            radlexId: 'RID905'
        }
    ]
});
```

## How to get a particular body part by RadLex ID, SNOMED, or another code?

To get a body part by id or any code (include local codes), you need to use the `get` function.

```typescript
const index = new BodyPartIndex({
    localBodyPartMappings: [
        { 
            localCode: { 
                code: 'THX1138', 
                system: 'LOCAL' 
            }, 
            radlexId: 'RID294' 
        }
    ]
});
const bodyPart = index.get('RID294');
const bodyPart2 = index.get('265256');  // FMA code
const bodyPart3 = index.get('THX1138'); // Local code
```

This function returns a `BodyPart` object.

## How to get a particular body part by code and system?

To get a body part by code AND system, you need to use the `getByCodeAndSystem` function.

```typescript
const index = new BodyPartIndex();
const bodyPart = index.getByCodeAndSystem({
    code: '443167003',
    system: 'SNOMED'
});
```
This function returns a `BodyPart` object.

## How to search for body parts based on names or synonyms?

The `search` function will return all the BodyParts that match a specific search value.

```typescript
const index = new BodyPartIndex();
const bodyParts = index.search('adnexa');
```

# `BodyPart` (Scenarios)

## What can you get from a `BodyPart`?
```typescript
const index = new BodyPartIndex();
const bodyPart = index.get('RID294');
bodyPart?.getDescription(); // "uterine adnexa"
bodyPart?.getSexSpecific(); // "Female"
bodyPart?.getSynonyms(); // ["adnexa"]
bodyPart?.getContainedBy(); // BodyPart object; RID2507, pelvis
bodyPart?.getPartOf(); // BodyPart object; RID270, female genital system
bodyPart?.getCodes(); // Array of Codes; [ {"system": "SNOMED", "code": "53065001"}, ... ]
```
## How do deal with sided body parts?

For cases where the body part is sided, the index contains three versions: an unsided version, a left-sided version, and a right-sided version. All of these are aware of each other.

```typescript
const index = new BodyPartIndex();
const bodyPart = index.get('RID294'); // uterine adnexa (side not specified)
// From the unsided version, get the right- and left-sided versions
const right = bodyPart?.getRight(); // BodyPart object; RID294_RID5825, right uterine adnexa
const left = bodyPart?.getLeft(); // BodyPart object; RID294_RID5824, left uterine adnexa
// From either of the sided versions, can get back to the unsided or to the other side
bodyPart?.isEqual(right?.getUnsided()); // true
right?.isEqual(left?.getRight()); // true
```

## How to determine if one body part is contained by another?

To determine if a one body part is contained by another, use the `isContained` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID56');
const bodyPart2 = index.get('RID199');
const isContained = bodyPart2?.isContained(bodyPart1);
```

## How to get the contained children of a body part?

To get the immediate contained children, use the `getImmediateContainedChildren` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID39569');
const immediateChildren = bodyPart1?.getImmediateContainedChildren();
```

To get all the contained children, use the `getAllContainedChildren` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID39569');
const children = bodyPart1?.getAllContainedChildren();
```

## How to get the contained ancestors of a body part?

To get the contained ancestors of a body part, use the `getAllContainedAncestors` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID480');
const ancestors = bodyPart1?.getAllContainedAncestors();
```

## How to determine if one body part is part of another?

To determine if a one body part is part of another, use the `isPartOf` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID480');
const bodyPart2 = index.get('RID905');
const isPartOf = bodyPart2?.isPartOf(bodyPart1);
```

## How to get the partOf children of a body part?

To get the immediate partOf children, use the `getImmediatePartOfChildren` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID480');
const immediateChildren = bodyPart1?.getImmediatePartOfChildren();
```

To get all the partOf children, use the `getAllPartOfChildren` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID480');
const children = bodyPart1?.getAllPartOfChildren();
```

## How to get the partOf ancestors of a body part?

To get the partOf ancestors of a body part, use the `getAllPartOfAncestors` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID579');
const ancestors = bodyPart1?.getAllPartOfAncestors();
```