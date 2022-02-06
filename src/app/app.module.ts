import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';
import { SupplierPreviewComponent } from './components/supplier-preview/supplier-preview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { NoAccessComponent } from './components/no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoicesListComponent,
    InvoiceNewComponent,
    InvoicePreviewComponent,
    SupplierPreviewComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
