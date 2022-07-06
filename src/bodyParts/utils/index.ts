import { BodyPart } from 'src/bodyParts/bodyPart/bodyPart';
import { BodyPartsData } from 'src/bodyParts/data';

export type BodyPartsMap = { [key: string]: boolean };

/**
 * Transform a map to an array of body parts.
 * @param {BodyPartsMap} map - The map.
 */
export const transformMapToBodyParts = (map: BodyPartsMap): BodyPart[] => {
    const arr = [];
	
    for (const i in map) {
        const data = BodyPartsData.bodyPartsMap[i];
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

    const data = BodyPartsData.bodyPartsMap[id];

    if (!data) {
        return null;
    }

    return new BodyPart(data);
};