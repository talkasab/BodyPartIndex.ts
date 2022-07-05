import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

const { bodyParts } = require('body_parts.json') as IBodyPartsFile;

class Index {

    /**
     * Returns body parts length.
     */
    public static getBodyPartsLength (): number {
        return bodyParts.length;
    }

    /**
	 *
	 * @param id
	 */
    public static get (id: string): void {
        const containedByIds: { [key: string]: string } = {};
        const partOfIds: { [key: string]: string } = {};

        bodyParts.forEach(item => {
            containedByIds[item.radlexId] = item.containedById;
            if (item.partOfId) {
                partOfIds[item.radlexId] = item.partOfId;
            }
        });

        containedByIds[id];
        console.log(containedByIds[id]);
    }

}

Index.get('RID56');

export {
    Index
};