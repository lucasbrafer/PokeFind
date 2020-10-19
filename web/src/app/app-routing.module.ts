import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokeLocalComponent } from './poke-local/poke-local.component';
import { PokeListaComponent } from './poke-lista/poke-lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: PokeListaComponent },
  { path: 'local', component: PokeLocalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
