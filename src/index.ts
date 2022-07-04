import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

const { bodyParts } = require('body_parts.json') as IBodyPartsFile;

class Index {

    /**
     * Returns body parts length.
     */
    public static getBodyPartsLength (): number {
        return bodyParts.length;
    }

}

export {
    Index
};