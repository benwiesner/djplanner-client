import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';

export const homeRoute = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
    {
    path: 'home',
    component: HomeComponent
    }
]