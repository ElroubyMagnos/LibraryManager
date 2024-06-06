import { Customer } from "./customer";

export interface OneRequest {
    id: number,
    ownerId: number,
    isColored: boolean,
    documentsFiles: Document[],
    customerClass: Customer
}
