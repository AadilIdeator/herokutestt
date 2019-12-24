import {Routes} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Component } from '@angular/core';
import {Router } from '@angular/router'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const approutes: Routes = [{
    path:'profile',
    component:ProfileComponent
},

{
    path: 'reactiveForm',
    component: ReactiveFormComponent
}
]