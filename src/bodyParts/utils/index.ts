import { BodyPartsData } from 'src/bodyParts/data';
import { BodyPart } from 'src/bodyParts/bodyPart';

export type BodyPartsMap = { [key: string]: boolean };

export class BodyPartsUtils {

    /**
	 * Transform a map to an array of body parts.
	 * @param {BodyPartsMap} map - The map.
	 */
    public static transformMap (map: BodyPartsMap): BodyPart[] {
        const arr = [];
		
        for (const i in map) {
            const data = BodyPartsData.bodyPartsMap[i];
            if (data) {
                const bodyPart = new BodyPart(data);
                arr.push(bodyPart);
            }
        }

        return arr;
    }

}