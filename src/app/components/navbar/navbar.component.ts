import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/Roles';
import { DataService } from 'src/app/services/data.service';

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
    console.log(this.currentRole)
    console.log(this.roles)    
  }

  onChangeRole(role: string) {
    this.dataService.changeRole(role);
    this.currentRole = Roles[this.dataService.getCurrentRole()];
  }
}
