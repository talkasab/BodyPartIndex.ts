import { Dev } from 'src/build/dev';

const json = require('body_parts.json');

class Index {

    /**
     * Returns result.
     */
    public static getResult (): string {
        // eslint-disable-next-line no-console
        console.log(json);
        return Dev.getDev();
    }

}

export {
    Index
};