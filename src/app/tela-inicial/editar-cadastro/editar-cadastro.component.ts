import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.scss'],
})
export class EditarCadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      status: ['A', Validators.required],
    });

    const id = Number(this.route.snapshot.paramMap.get('codUsuario'));

    if (id) {
      this.usuarioService.buscarUsuarioPorId(id).subscribe({
        next: (usuario) => {
          this.preencherFormulario(usuario);
        },
        error: (err) => console.error('Erro ao buscar usuário:', err),
      });
    }
  }

  preencherFormulario(usuario: Usuario) {
    this.form.patchValue({
      nome: usuario.txNome,
      status: usuario.stStatus,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const id = Number(this.route.snapshot.paramMap.get('codUsuario'));
      const formValues = this.form.value;

      const usuarioAtualizado: Usuario = {
        codUsuario: id,
        txNome: formValues.nome,
        stStatus: formValues.status,
      };

      this.usuarioService.atualizarUsuario(id, usuarioAtualizado).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Atualizado',
            detail: 'Usuário atualizado com sucesso.',
          });
          this.router.navigate(['/listar-cadastros']);
        },
        error: (err) => {
          console.error('Erro ao atualizar usuário:', err);
        },
      });
    }
  }

  voltar() {
    this.router.navigate(['/listar-cadastros']);
  }
}
