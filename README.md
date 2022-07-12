# AnatomicLocations

Provides data and simple libraries for manipulating a standard list of anatomic locations.

## Installation

```console
npm i path-to-library
```

# Scenarios

## How to open the library?

To open the library, you first need to import it in your project. Then, you can use the `BodyPartIndex` object.

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
