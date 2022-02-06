import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Supplier } from './../../models/Supplier';
import { Invoice } from './../../models/Invoice';
import { Roles } from 'src/app/models/Roles';
import { isPermitedHighAccess } from './../../utilities/utilities';


@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css']
})
export class InvoiceNewComponent implements OnInit {
  number: string;
  date: Date;
  amount: number;
  supplier: Supplier;
  suppliers: Supplier[]

  supplierSelected: string = '';

  constructor(
    private dataService: DataService
  ) {
    this.number = this.generateId();
    this.date = new Date();
    this.amount = 0;
    this.supplier = {
      id: '',
      name: '',
      address: ''
    }

    this.suppliers = [...this.dataService.getSuppliers()];
    if(this.suppliers.length > 0) {
      if(this.suppliers[0].id === 'all')
        this.suppliers.splice(0, 1);      
    }
  }

  ngOnInit(): void {
  }

  updateSelectedSupplier(event: Event) {
    this.supplier = this.dataService.getSupplier(this.supplierSelected);
  }

  onAddNewInvoice() {
    const newInvoice: Invoice = {
      number: this.number,
      orderAt: this.date,
      supplier: this.supplier,
      amount: this.amount
    }

    if(!newInvoice.number || !newInvoice.orderAt || !newInvoice.supplier || !newInvoice.amount)
      return;
      
    this.dataService.addNewInvoice(newInvoice);   
  }

  onIsPermitedHighAccess() {
    return isPermitedHighAccess(Roles[this.dataService.getCurrentRole()]);
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }
}
