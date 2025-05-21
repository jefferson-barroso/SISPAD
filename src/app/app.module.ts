import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastrarUsuarioComponent } from './tela-inicial/cadastrar-usuario/cadastrar-usuario.component';
import { ListarCadastrosComponent } from './tela-inicial/listar-cadastros/listar-cadastros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditarCadastroComponent } from './tela-inicial/editar-cadastro/editar-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    CadastrarUsuarioComponent,
    ListarCadastrosComponent,
    EditarCadastroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,


  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
