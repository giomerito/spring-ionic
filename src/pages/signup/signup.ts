import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';
import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuild: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController
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

  ionViewDidLoad() {
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      },
        error => { });
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      },
        error => { });
  }

  signupUser() {
    this.clienteService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
        error => { });
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: "Sucesso!",
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
