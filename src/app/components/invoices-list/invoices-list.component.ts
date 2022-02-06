import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Invoice } from './../../models/Invoice';
import { Supplier } from './../../models/Supplier';


@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[];
  suppliers: Supplier[];

  supplierSelected: string;
  modifedText: string = '';

  constructor(
    private dataService: DataService
  ) { 
    this.invoices = dataService.getInvoices();
    this.suppliers = dataService.getSuppliers();
    this.supplierSelected = this.suppliers[0].id;
  }

  ngOnInit(): void {
  }

  

  onFilterInvoicesBySupplierName(id: string) {
      this.invoices = this.dataService.filterInvoicesBySupplierName(id);
  }
}
