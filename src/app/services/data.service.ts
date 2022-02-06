import { Injectable } from '@angular/core';
import { Invoice } from './../models/Invoice';
import { Supplier } from './../models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  invoice: Invoice;
  supplier: Supplier;

  constructor() { 
    this.invoice = {
      number: '1',
      orderAt: new Date(),
      amount: 11546.43,
      supplier: {
        id: '2',
        name: 'Microsoft Software',
        address: '50 main str, London'
      }
    }

    this.supplier = {
      id: '3',
      name: 'Oracle Databases Comp',
      address: '44 Hight Street, Reading'
    }
  }

  getInvoice(id: string) {
    return this.invoice;
  }

  getSupplier(id: string) {
    return this.supplier;
  }
}
