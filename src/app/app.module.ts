import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {approutes} from '../app/apps.routes';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
