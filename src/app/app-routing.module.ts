import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastrarUsuarioComponent } from './tela-inicial//cadastrar-usuario/cadastrar-usuario.component';
import { ListarCadastrosComponent } from './tela-inicial/listar-cadastros/listar-cadastros.component';
import { EditarCadastroComponent } from './tela-inicial/editar-cadastro/editar-cadastro.component';


const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'listar-cadastros', component: ListarCadastrosComponent },
  { path: 'editar-cadastro/:codUsuario', component: EditarCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
