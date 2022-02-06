import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SupplierPreviewComponent } from './components/supplier-preview/supplier-preview.component';


const routes: Routes = [
  { path: '', component: InvoicesListComponent },
  { path: 'invoices/new', component: InvoiceNewComponent},
  { path: 'invoices/:id', component: InvoicePreviewComponent},
  { path: 'suppliers/:id', component: SupplierPreviewComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})





export class AppRoutingModule { }
