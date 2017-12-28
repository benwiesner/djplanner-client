import { ClientDisplayComponent } from '../client/client-display/client-display.component';
import { ClientCreateComponent } from '../client/client-create/client-create.component';
import { ClientEditComponent } from '../client/client-edit/client-edit.component';

export const clientRoute = [
    //Future Route Organization
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