import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/Roles';
import { DataService } from 'src/app/services/data.service';
import { isPermitedHighAccess } from './../../utilities/utilities';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../invoices-list/invoices-list.component.css']
})
export class NavbarComponent implements OnInit {
  currentRole: string;
  roles: string[];
  roleSelected: string = '';

  constructor(
    private dataService: DataService
  ) { 
    this.currentRole = Roles[this.dataService.getCurrentRole()];
    this.roles = this.dataService.getRoles();
    this.roleSelected = Roles[this.dataService.getCurrentRole()];
  }

  ngOnInit(): void {
    
  }

  onIsPermitedHighAccess() {
    return isPermitedHighAccess(this.currentRole);
  }

  onChangeRole(role: string) {
    this.dataService.changeRole(role);
    this.currentRole = Roles[this.dataService.getCurrentRole()];
  }
}
