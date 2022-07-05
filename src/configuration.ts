import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

const file = require('body_parts.json') as IBodyPartsFile;

const configuration = {
    file,
    version: __VERSION__
};

export {
    configuration
};