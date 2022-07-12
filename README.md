# AnatomicLocations

Provides data and simple libraries for manipulating a standard list of anatomic locations.

## Installation

```console
npm i path-to-library
```

# BodyPartIndex (Scenarios)

## How to open the library?

To open the library, you first need to import it into your project. Then, you can use the `BodyPartIndex` object.

```typescript
import { BodyPartIndex } from '@talkasab/anatomic_locations';

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
                system: 'NUANCE'
            },
            radlexId: 'RID56'
        },
        {

            localCode: {
                code: '31129',
                system: 'NUANCE'
            },
            radlexId: 'RID905'
        }
    ]
});
```

## How to get a particular body part by id?

To get a body part by id, you need to use the `get` function.

```typescript
const index = new BodyPartIndex();

const bodyPart = index.get('RID294');
```

This function returns a `BodyPart` object.

## How to get a particular body part by code?

The `get` function also works with codes (including local ones).

```typescript
const index = new BodyPartIndex();

const bodyPart = index.get('265256');
```
## How to search for body parts based on names or synonyms?

The `search` function will return all the BodyParts that match a specific search value.

```typescript
const index = new BodyPartIndex();
const bodyParts = index.search('adnexa');
```

# BodyPart (Scenarios)

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
const bodyPart1 = index.get('RID480');
const immediateChildren = bodyPart1?.getImmediateContainedChildren();
```

To get all the contained children, use the `getAllContainedChildren` function.

```typescript
const index = new BodyPartIndex();
const bodyPart1 = index.get('RID480');
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
const bodyPart1 = index.get('RID480');
const ancestors = bodyPart1?.getAllPartOfAncestors();
```