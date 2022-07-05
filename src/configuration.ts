import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const file = require('body_parts.json') as IBodyPartsFile;

const configuration = {
    file,
    version: __VERSION__
};

export {
    configuration
};