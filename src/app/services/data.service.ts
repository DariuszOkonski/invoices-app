import { Injectable } from '@angular/core';
import { Invoice } from './../models/Invoice';
import { Supplier } from './../models/Supplier';

const fakeSuppliers: Supplier[] = [
  {id: '1', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  {id: '2', name: 'Moovem Sp z o.o', address: 'Al. Jerozolimskie 100. 00-807 Warszawa '},
  {id: '3', name: 'Divante', address: 'ul.Dmowskiego 17, 50-203 Wrocław'},
]

const fakeInvoices: Invoice[] = [
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },
  {
    number: '1',
    orderAt: new Date(),
    amount: 11546.43,
    supplier: {
      id: '2',
      name: 'Microsoft Software',
      address: '50 main str, London'
    }
  },

]

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
