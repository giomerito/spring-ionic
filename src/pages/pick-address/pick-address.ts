import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua do oitiseiro",
        numero: "1586",
        complemento: "Casa 2",
        bairro: "Jardim das Acácias",
        cep: "47.850-00",
        cidade: {
          id: "1",
          nome: "Luis Eduardo Magalhães",
          estado: {
            id: "1",
            nome: "Bahia"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Minas Gerais",
        numero: "42",
        complemento: "Casa 2",
        bairro: "Mimoso I",
        cep: "47.850-00",
        cidade: {
          id: "1",
          nome: "Luis Eduardo Magalhães",
          estado: {
            id: "1",
            nome: "Bahia"
          }
        }
      }
    ]
  }

}
