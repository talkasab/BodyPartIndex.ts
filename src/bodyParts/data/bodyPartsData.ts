import { IBodyPart } from 'src/interfaces/bodyParts/IBodyPart';
import { IBodyPartsFile } from 'src/interfaces/bodyParts/IBodyPartsFile';

interface IRadlexIdMap {
	[key: string]: string
}

class BodyPartsData {

    public static version: string;
    public static bodyParts: IBodyPart[];
    public static containedByIds: IRadlexIdMap;
    public static partOfIds: IRadlexIdMap;

    /**
     * Initializes the BodyPartsData.
     * @param {IBodyPartsFile} file - The file.
     */
    public static init(file: IBodyPartsFile): void {
        const containedByIds: IRadlexIdMap = {};
        const partOfIds: IRadlexIdMap = {};

        file.bodyParts.forEach(item => {
            containedByIds[item.radlexId] = item.containedById;
            if (item.partOfId) {
                partOfIds[item.radlexId] = item.partOfId;
            }
        });

        this.version = file.$version;
        this.bodyParts = file.bodyParts;
        this.containedByIds = containedByIds;
        this.partOfIds = partOfIds;
    }

}

export {
    BodyPartsData
};