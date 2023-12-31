// @ts-nocheck

import { fromWei } from "./Web3Helpers";
export const parseMetadata = (fileAsText, tokenId, uri, price) => {
    const metadata = JSON.parse(fileAsText);
     return {
        title: metadata.name,
        description: metadata.description,
        price: fromWei(Number(price)),
        imageUri: metadata.cover,
        id: tokenId,
        uri : uri,
    }
}
export const readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };

        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result);
        };
        temporaryFileReader.readAsText(inputFile);
    });
};