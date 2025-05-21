import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss'],
})
export class CadastrarUsuarioComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      status: ['A', Validators.required],
    });
  }

  voltar() {
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      const usuario: Usuario = {
        codUsuario: formValues.codUsuario,
        txNome: formValues.nome,
        stStatus: formValues.status,
      };

      this.usuarioService.cadastrarUsuario(usuario).subscribe({
        next: (res) => {
          alert(`Usuário ${res.txNome} cadastrado com sucesso!`);
          this.form.reset({ status: 'A' });
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err);
          alert('Erro ao cadastrar usuário.');
        },
      });
    }
  }
}
