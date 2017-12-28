import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ClientDisplayComponent } from './client/client-display/client-display.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';


//TO-DO Reorganize
const appRoutes: Routes = [
  
  {
    path: 'clients',
    component: ClientDisplayComponent,
    data: {title: 'Client List'}
  },
  {
    path: 'client-create',
    component: ClientCreateComponent,
    data: {title: 'Create Client'}
  },
  {
    path: 'client-edit/:id',
    component: ClientEditComponent,
    data: {title: 'Edit Client'}
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClientDisplayComponent,
    ClientCreateComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
