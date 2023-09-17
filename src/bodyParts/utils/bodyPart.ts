import { BodyPart } from '../bodyPart/bodyPart';
import { BODY_PARTS } from '..';

export type BodyPartsMap = { [key: string]: boolean };

/**
 * Transforms a map into an array of BodyParts.
 * @param {BodyPartsMap} map - The map.
 */
export const transformMapToBodyParts = (map: BodyPartsMap): BodyPart[] => {
    const arr = [];
	
    for (const i in map) {
        const data = BODY_PARTS.map[i];
        if (data && map[i]) {
            const bodyPart = new BodyPart(data);
            arr.push(bodyPart);
        }
    }

    return arr;
};

/**
 * Returns a BodyPart by radlex id.
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