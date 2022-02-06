import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Invoice } from './../../models/Invoice';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit {
  invoice: Invoice

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { 
    this.invoice = {
      number: '',
      orderAt: new Date(),
      amount: 0,
      supplier: {
        id: '',
        name: '',
        address: ''
      }
    }
  }

  ngOnInit(): void {
    console.log('Invoice Preview')
    const { id } = this.route.snapshot.params;
    
    this.invoice = this.dataService.getInvoice(id);
  }

}
