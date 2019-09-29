import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import {ExtrasComponent} from "./components/extras/extras.component";
import {ParcoursComponent} from "./components/parcours/parcours.component";
import {ProjetsComponent} from "./components/projets/projets.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'extras', component: ExtrasComponent},
  { path: 'parcours', component: ParcoursComponent},
  { path: 'projets', component: ProjetsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
