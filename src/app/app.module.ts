import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoicesListComponent,
    InvoiceNewComponent,
    InvoicePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
