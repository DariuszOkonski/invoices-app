import { Injectable } from '@angular/core';
import { Roles } from '../models/Roles';
import { Invoice } from './../models/Invoice';
import { Supplier } from './../models/Supplier';

const fakeSuppliers: Supplier[] = [
  {id: 'all', name: 'All', address: ''},
  {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  {id: 'f3469a56-29c1-4912-aa30-c1dac1e37e01', name: 'Moovem Sp z o.o', address: 'Al. Jerozolimskie 100. 00-807 Warszawa '},
  {id: 'bef10e62-e49a-4437-9766-9fe5cf553eb4', name: 'Divante', address: 'ul.Dmowskiego 17, 50-203 Wrocław'},
  {id: 'bef10e62-e26a-4437-9766-9fe5cf553ec4', name: 'Comarch', address: 'ul.Kazimierz 17, 51-288 Kraków'},
]

// const fakeSuppliers: Supplier[] = [];


// const fakeInvoices: Invoice[] =[];

const fakeInvoices: Invoice[] = [
  {
    number: 'dc0ff5f1-0126-40b1-bbd7-afff24d2252b',
    orderAt: new Date('02/02/2022 18:54:23'),
    amount: 11289.00,
    supplier: {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  },
  {
    number: '157a70cf-1c69-4341-9441-202c7858e740',
    orderAt: new Date('03/02/2022 18:54:23'),
    amount: 32987.90,
    supplier: {id: 'f3469a56-29c1-4912-aa30-c1dac1e37e01', name: 'Moovem Sp z o.o', address: 'Al. Jerozolimskie 100. 00-807 Warszawa '},
  },
  {
    number: '91e2fa9b-0d1e-4e5d-b58a-70d37e5220f7',
    orderAt: new Date('01/01/2022 10:54:23'),
    amount: 123654.23,
    supplier: {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  },
  {
    number: '38f07dea-29e7-4a7c-b147-7d18de8e8533',
    orderAt: new Date('05/01/2022 14:23:32'),
    amount: 38980.00,
    supplier: {id: 'bef10e62-e49a-4437-9766-9fe5cf553eb4', name: 'Divante', address: 'ul.Dmowskiego 17, 50-203 Wrocław'},
  },
  {
    number: '5290183c-f700-45e0-a185-a69f6db7cb33',
    orderAt: new Date('05/01/2022 14:23:32'),
    amount: 456789.09,
    supplier: {id: 'f3469a56-29c1-4912-aa30-c1dac1e37e01', name: 'Moovem Sp z o.o', address: 'Al. Jerozolimskie 100. 00-807 Warszawa '},
  },
  {
    number: 'c641432e-c170-4f87-b253-a662e0d44f49',
    orderAt: new Date('01/01/2022 10:54:23'),
    amount: 236789.98,
    supplier: {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  },
  {
    number: '04f03323-2014-4f56-9dbf-fcccfa3fd9b0',
    orderAt: new Date('10/10/2021 14:21:42'),
    amount: 654123.99,
    supplier: {id: 'f3469a56-29c1-4912-aa30-c1dac1e37e01', name: 'Moovem Sp z o.o', address: 'Al. Jerozolimskie 100. 00-807 Warszawa '},
  },
  {
    number: '3e03b149-f234-42c0-946f-b0033dd354bd',
    orderAt: new Date('11/10/2021 11:23:21'),
    amount: 123546.00,
    supplier: {id: 'bef10e62-e49a-4437-9766-9fe5cf553eb4', name: 'Divante', address: 'ul.Dmowskiego 17, 50-203 Wrocław'},
  },
  {
    number: 'adf3d87b-ea96-4657-b227-20df1fffb326',
    orderAt: new Date('11/10/2021 11:23:21'),
    amount: 121901.00,
    supplier: {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  },
  {
    number: 'adf3d87b-ea96-4657-b227-20df1fffb324',
    orderAt: new Date('01/01/2022 10:54:23'),
    amount: 321980.21,
    supplier: {id: 'fd05b131-9ceb-4dc3-97f8-ed69b719a1c3', name: 'Infinite Sp. z o.o.', address: 'ul.Projektowa 1, 20-209 Lublin'},
  },

]


@Injectable({
  providedIn: 'root'
})
export class DataService {
  invoices: Invoice[];
  suppliers: Supplier[];
  currentRole: Roles;
  roles: string[];


  constructor() { 
    this.invoices = [...fakeInvoices];
    this.suppliers = [...fakeSuppliers];
    this.currentRole = Roles.ADMIN;
    this.roles = [];
    this.mapRolesToStringArray();
  }

  getRoles() {
    return this.roles;
  }

  // this method must be refactored
  changeRole(role: string) {
    switch (role) {
      case 'USER':
          this.currentRole = Roles.USER;
        break;
      case 'GUEST':
          this.currentRole = Roles.GUEST;
        break    
      default:
        this.currentRole = Roles.ADMIN
    }
  }

  mapRolesToStringArray() {
    for (const value in Roles) {
      if(isNaN(Number(value)))
        this.roles.push(value);
        
    }
  }

  getCurrentRole() {
    return this.currentRole;
  }

  getInvoices() {
    return this.invoices;
  }

  getSuppliers() {
    return this.suppliers;
  }

  filterInvoicesBySupplierName(id: string) {
    if(id === 'all') {
      return this.invoices;
    }

    return this.invoices.filter(invoice => invoice.supplier.id === id);
  }

  addNewInvoice(invoice: Invoice) {
    this.invoices.push(invoice);
  }

  getInvoice(id: string) {
    return this.invoices.filter(invoice => invoice.number === id);
  }

  saveEditedSupplier(supplier: Supplier) {
    console.log('data service')
    console.log(supplier)

    this.suppliers = this.suppliers.map(sup => {
      if(sup.id === supplier.id)
        return supplier;
      return sup
    });

    this.invoices = this.invoices.map(inv => {
      if(inv.supplier.id === supplier.id) {
        return {
          ...inv,
          supplier
        }
      }
      
      return inv
    })
  }

  // TODO - temporarly, write logic
  getSupplier(id: string) {
    const tempSupplier = this.suppliers.find(supplier => supplier.id === id);

    const supplier: Supplier = {
      id: (tempSupplier === undefined) ? '' : tempSupplier.id,
      name: (tempSupplier === undefined) ? '' : tempSupplier.name,
      address: (tempSupplier === undefined) ? '' : tempSupplier.address,
    }

    return supplier;
  }
}
