import { Injectable } from '@angular/core';
import { Invoice } from './../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  invoice: Invoice

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
  }

  getInvoice(id: string) {
    return this.invoice;
  }
}
