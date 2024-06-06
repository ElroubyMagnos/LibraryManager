import { OneRequest } from "./OneRequest";

export interface Document {
    id: number,
    fileItself: string,
    nameOfFile: string,
    requestID: number,
    printingCountTime: number,
    printRequest: OneRequest
}
