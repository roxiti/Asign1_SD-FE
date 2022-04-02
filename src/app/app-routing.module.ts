import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {HomeComponent} from "./content/pages/home/home.component";
//import { Page1Component } from '..app/page1/Page1Component';



const routes: Routes = [

  { path: 'first-component', component: Page1Component },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


