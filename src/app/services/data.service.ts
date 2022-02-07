import { Injectable } from '@angular/core';
import { Roles } from '../models/Roles';
import { fakeInvoices, fakeSuppliers, INVOICES, SUPPLIERS, ALL } from '../utilities/utilities';
import { Invoice } from './../models/Invoice';
import { Supplier } from './../models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  invoices: Invoice[];
  suppliers: Supplier[];
  currentRole: Roles;
  roles: string[];


  constructor() { 
    this.invoices = [];
    this.suppliers = [];
    this.currentRole = Roles.ADMIN;
    this.roles = [];
    this.mapRolesToStringArray();
    this.getSuppliersFromLocalStorage();
    this.getInvoicesFromLocalStorage();
  }

  getSuppliersFromLocalStorage() {
    if(localStorage.getItem(SUPPLIERS) === null) {
      this.suppliers = [...fakeSuppliers];
      localStorage.setItem(SUPPLIERS, JSON.stringify(this.suppliers));
      this.getSuppliersFromLocalStorage();
    } else {
      const tempSuppliers = localStorage.getItem(SUPPLIERS)
      if(tempSuppliers !== null) {
        this.suppliers = JSON.parse(tempSuppliers);
      }
    }
  }

  getInvoicesFromLocalStorage() {
    if(localStorage.getItem(INVOICES) === null) {
      this.invoices = [...fakeInvoices];
      localStorage.setItem(INVOICES, JSON.stringify(this.invoices));
      this.getInvoicesFromLocalStorage();
    } else {
      const tempInvoices = localStorage.getItem(INVOICES);
      if(tempInvoices !== null) {
        this.invoices = JSON.parse(tempInvoices);
      }
    }
  }

  getRoles() {
    return this.roles;
  }

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
    if(id === ALL) {
      return this.invoices;
    }

    return this.invoices.filter(invoice => invoice.supplier.id === id);
  }

  addNewInvoice(invoice: Invoice) {
    this.invoices.push(invoice);
    localStorage.setItem(INVOICES, JSON.stringify(this.invoices));
  }

  getInvoice(id: string) {
    const tempInvoice = this.invoices.find(invoice => invoice.number === id);

    const invoice: Invoice = {
      number: (tempInvoice === undefined) ? '' : tempInvoice.number,
      orderAt: (tempInvoice === undefined) ? new Date() : tempInvoice.orderAt,
      amount: (tempInvoice === undefined) ? 0 : tempInvoice.amount,
      supplier: (tempInvoice === undefined) ? {id: '',name: '',address: ''} : tempInvoice.supplier,
    }

    return invoice;
  }

  saveEditedSupplier(supplier: Supplier) {
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

    localStorage.setItem(SUPPLIERS, JSON.stringify(this.suppliers));
    localStorage.setItem(INVOICES, JSON.stringify(this.invoices));
  }

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
