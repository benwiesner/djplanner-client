import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const appRoutes: Routes = [
  {
    path: 'clients',
    component: ClientComponent,
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
    ClientComponent,
    ClientCreateComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
