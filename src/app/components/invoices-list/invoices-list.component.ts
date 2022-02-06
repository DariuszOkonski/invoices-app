import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Invoice } from './../../models/Invoice';


@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[];

  constructor(
    private dataService: DataService
  ) { 
    this.invoices = dataService.getInvoices();
  }

  ngOnInit(): void {
  }

  getInvoices() {

  }
}
