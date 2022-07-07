import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { BODY_PARTS } from 'src/bodyParts';

export type BodyPartsMap = { [key: string]: boolean };

/**
 * Transform a map to an array of body parts.
 * @param {BodyPartsMap} map - The map.
 */
export const transformMapToBodyParts = (map: BodyPartsMap): BodyPart[] => {
    const arr = [];
	
    for (const i in map) {
        const data = BODY_PARTS.map[i];
        if (data) {
            const bodyPart = new BodyPart(data);
            arr.push(bodyPart);
        }
    }

    return arr;
};

/**
 * Returns the body part by radlex id.
 * @param {string | null} id - The id.
 */
export const getBodyPartById = (id: string | null): BodyPart | null => {
    if (!id) {
        return null;
    }

    const data = BODY_PARTS.map[id];

    if (!data) {
        return null;
    }

    return new BodyPart(data);
};