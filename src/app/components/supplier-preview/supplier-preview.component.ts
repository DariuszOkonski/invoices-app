import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Supplier } from './../../models/Supplier';
import { Roles } from 'src/app/models/Roles';
import { isPermitedHighAccess, isPermitedLowAccess } from './../../utilities/utilities';

@Component({
  selector: 'app-supplier-preview',
  templateUrl: './supplier-preview.component.html',
  styleUrls: ['./supplier-preview.component.css']
})
export class SupplierPreviewComponent implements OnInit {
  supplier: Supplier;
  isEditable: boolean = true;
  isError = false;

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
    const { id } = this.route.snapshot.params;
    this.supplier = this.dataService.getSupplier(id);

    if(this.supplier.id === '') {
      this.isError = true;
    }
  }

  onEdit() {
    this.isEditable = !this.isEditable;
  }

  onSaveSupplier() {
    this.dataService.saveEditedSupplier(this.supplier);
  }

  onIsPermitedHighAccess() {
    if(this.dataService.getCurrentRole() === Roles.USER && !this.isEditable) {     
      this.isEditable = true;
    }
    return isPermitedHighAccess(Roles[this.dataService.getCurrentRole()]);
  }
  
  onIsPermitedLowAccess() {
    return isPermitedLowAccess(Roles[this.dataService.getCurrentRole()])
  }

}
