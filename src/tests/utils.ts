import * as bodyParts from 'src/bodyParts';
import { IBodyPartsResponse } from 'src/bodyParts/interfaces/IBodyPartsResponse';

/**
 * Mocks the bodyParts const.
 * @param {Partial<IBodyPartsResponse>} mock - The body part mock. 
 */
export const mockBodyParts = (mock: Partial<IBodyPartsResponse>): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    bodyParts.BODY_PARTS = mock;
};