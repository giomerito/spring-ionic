import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuild: FormBuilder
  ) {
    this.formGroup = this.formBuild.group({
      nome: ['Giomerito Alves de Souza', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['giomerito@gmail.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Rua do Oitiseiro', [Validators.required]],
      numero: ['1586', [Validators.required]],
      complemento: ['Casa 2', []],
      bairro: ['Jardim das Acácias', []],
      cep: ['47850-000', [Validators.required]],
      telefone1: ['99869-2532', [Validators.required]],
      telefone2: ['99991-4458', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    })
  }

  signupUser() {
    console.log('Enviou o form');
  }

}
