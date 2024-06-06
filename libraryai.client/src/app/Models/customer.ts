import { OneRequest } from "./OneRequest";

export interface Customer {
    id: number,
    name: string,
    phone: string,
    password: string,
    printRequests: OneRequest[]
}
