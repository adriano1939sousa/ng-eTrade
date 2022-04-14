import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/models/cliente';
import { ClienteService } from 'src/app/cliente/service/cliente.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  // public nome?: String;
  // public cpf_cnpj?: String;
  // public rua? : String;
  // public bairro? : String;
  // public cidade? : String;
  // public cep? : String;
  // public uf?: String;
  // public fone? : String;
  // public dataNasc? : Date;
  // public tipo? : String;
  // public sexo? : String;

  cliente: Cliente = {
    nome: '',
    cpf_cnpj: '',
    rua: '',
    bairro: '',
    cidade: '',
    cep: '',
    uf: '',
    fone: '',
    dataNasc: '',
    tipo: '',
    sexo: ''
  };
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      cpf_cnpj: this.cliente.cpf_cnpj,
      rua: this.cliente.rua,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      cep: this.cliente.cep,
      uf: this.cliente.uf,
      fone: this.cliente.fone,
      dataNasc: this.cliente.dataNasc,
      tipo: this.cliente.tipo,
      sexo: this.cliente.sexo
      
    };

    this.clienteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      cpf_cnpj: '',
      rua: '',
      bairro: '',
      cidade: '',
      cep: '',
      uf: '',
      fone: '',
      dataNasc: '',
      tipo: '',
      sexo: ''
    };
  }

}
