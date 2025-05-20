import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastrarUsuarioComponent } from './tela-inicial//cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
