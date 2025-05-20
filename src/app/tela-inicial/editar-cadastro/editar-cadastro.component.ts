import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.scss']
})
export class EditarCadastroComponent implements OnInit {

form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      status: ['A', Validators.required]
    });
  }

  /*Colocar para voltar no listar cadastros */

  voltar() {
    this.router.navigate(['']);
  }


  onSubmit() {

    /*
    if (this.form.valid) {
      const formValues = this.form.value;

      // Mapear os campos para o formato esperado pela API
      const usuario: Usuario = {
        txNome: formValues.nome,
        stStatus: formValues.status,
      };

      this.usuarioService.cadastrarUsuario(usuario).subscribe({
        next: (res) => {
          this.toastr.success(`Usuário ${res.txNome} cadastrado com sucesso!`);
          this.form.reset({ status: 'A' });
          this.router.navigate(['']); // volta para tela inicial
        },
        error: (err) => {
          this.toastr.error('Erro ao cadastrar usuário.');
          console.error(err);
        },
      });
      */
}

}
