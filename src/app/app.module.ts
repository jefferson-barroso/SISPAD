import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastrarUsuarioComponent } from './tela-inicial/cadastrar-usuario/cadastrar-usuario.component';
import { ListarCadastrosComponent } from './tela-inicial/listar-cadastros/listar-cadastros.component';
import { BuscarUsuarioComponent } from './tela-inicial/buscar-usuario/buscar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    CadastrarUsuarioComponent,
    ListarCadastrosComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
