
//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//HTTP Routes
import { routes } from './routes/routeIndex';
const appRoutes: Routes = routes;

//Custom Components
import { AppComponent } from './app.component';
import { ClientDisplayComponent } from './client/client-display/client-display.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    ClientDisplayComponent,
    ClientCreateComponent,
    ClientEditComponent,
    NavigationBarComponent,
    HomeComponent
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
