import { ClientDisplayComponent } from '../client/client-display/client-display.component';
import { ClientCreateComponent } from '../client/client-create/client-create.component';
import { ClientEditComponent } from '../client/client-edit/client-edit.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';

//import { clientRoute } from "./clientRoute";
//import { homeRoute } from "./homeRoute";

let tempRoutes = [
   
    //Home Routes
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
    {
    path: 'home',
    component: HomeComponent
    },

    //Client Portal Routes
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
      }
    ]


export const routes = tempRoutes;
