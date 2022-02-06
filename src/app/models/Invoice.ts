import { Supplier } from './Supplier';

export interface Invoice {
    number: string,
    orderAt: Date,
    supplier: Supplier,
    amount: number
}