/**
 * Returns the library version (for debugging purposes).
 */
window.getBodyPartsIndexVersion = (): string => {
    return __VERSION__;
};

export { BodyPartIndex } from 'src/bodyParts';
export { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
export { Code } from 'src/bodyParts/bodyPart/code';