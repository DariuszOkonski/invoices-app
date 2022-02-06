import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Supplier } from './../../models/Supplier';

@Component({
  selector: 'app-supplier-preview',
  templateUrl: './supplier-preview.component.html',
  styleUrls: ['./supplier-preview.component.css']
})
export class SupplierPreviewComponent implements OnInit {
  supplier: Supplier

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.supplier = {
      id: '',
      name: '',
      address: ''
    }
   }

  ngOnInit(): void {
    console.log('Supplier Preview class')
    const { id } = this.route.snapshot.params;

    this.supplier = this.dataService.getSupplier(id);

    console.log(this.supplier)
  }

}
