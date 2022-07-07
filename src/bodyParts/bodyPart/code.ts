import { ICode } from 'src/bodyParts/interfaces/ICode';

export class Code {

    /**
	 * The code constructor initialization.
	 * @param {ICode} data - The data.
	 */
    public constructor (
		private data: ICode
    ) {}

    /**
	 * Returns the code.
	 */
    public getCode (): string {
        return this.data.code;
    }

    /**
	 * Returns the system.
	 */
    public getSystem (): string {
        return this.data.system;
    }

}