import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-cadastros',
  templateUrl: './listar-cadastros.component.html',
  styleUrls: ['./listar-cadastros.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ListarCadastrosComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtroNome: string = '';
  codUsuario: any;
  id: number | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
    this.id = +this.route.snapshot.paramMap.get('codUsuario')!;
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (dados) => {
        this.usuarios = dados;
      },
      error: (err) => console.error(err),
    });
  }

  pesquisar() {
    if (this.filtroNome.trim()) {
      this.usuarios = this.usuarios.filter((u) =>
        u.txNome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    } else {
      this.carregarUsuarios();
    }
  }

  excluir(id: any) {
    this.usuarioService.deletarUsuario(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Excluído',
          detail: 'Usuário excluído com sucesso.',
        });
        this.carregarUsuarios();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao excluir usuário.',
        });
        console.error(err);
      },
    });
  }

  editar(usuario: Usuario) {
    this.router.navigate(['/editar-cadastro', usuario.codUsuario]);
  }

  voltar() {
    this.router.navigate(['']);
  }
}
