import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Invoice } from './../../models/Invoice';
import { Supplier } from './../../models/Supplier';
import { Roles } from 'src/app/models/Roles';
import { isPermitedHighAccess, isPermitedLowAccess } from './../../utilities/utilities';


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

    if(this.suppliers.length > 0) {
      this.supplierSelected = this.suppliers[0].id;
    } else {
      this.supplierSelected = '';
    }
  }

  ngOnInit(): void {
  }
 
  
  onIsPermitedHighAccess() {
    return isPermitedHighAccess(Roles[this.dataService.getCurrentRole()]);
  }

  onIsPermitedLowAccess() {
    return isPermitedLowAccess(Roles[this.dataService.getCurrentRole()])
  }

  onFilterInvoicesBySupplierName(id: string) {
      this.invoices = this.dataService.filterInvoicesBySupplierName(id);
  }
}
