import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listar-cadastros',
  templateUrl: './listar-cadastros.component.html',
  styleUrls: ['./listar-cadastros.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListarCadastrosComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtroNome: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (dados) => (this.usuarios = dados),
      error: (err) => console.error(err)
    });
  }

  pesquisar() {
    if (this.filtroNome.trim()) {
      this.usuarios = this.usuarios.filter(u =>
        u.txNome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    } else {
      this.carregarUsuarios(); // limpa filtro e recarrega
    }
  }

  confirmarExcluir(usuario: Usuario) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir o usuário ${usuario.txNome}?`,
      accept: () => this.excluir(usuario.id!)
    });
  }

  excluir(id: number) {
    this.usuarioService.deletarUsuario(id).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Excluído', detail:'Usuário excluído com sucesso.'});
        this.carregarUsuarios();
      },
      error: (err) => {
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao excluir usuário.'});
        console.error(err);
      }
    });
  }

  editar(usuario: Usuario) {
    // Aqui você pode implementar navegação para tela de edição,
    // passando o ID ou objeto do usuário.
    // Exemplo:
    // this.router.navigate(['/editar-usuario', usuario.id]);
    alert(`Implementar edição para usuário: ${usuario.txNome}`);
  }
}
