import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css']
})
export class EditarContatoComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {

    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;


    this.spinner.show();


    this.httpClient.get(
      environment.apiContato + "api/contatos/" + id,
    
    )
      .subscribe({
        next: (data: any) => {
          this.formEdicao.patchValue(data);
        },


        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      })
      .add(
        () => {
          this.spinner.hide();
        }
      )
  }


  //objeto para capturar o formulário
  formEdicao = new FormGroup({
    idContato: new FormControl('', []),
    nome: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required]),
     telefone: new FormControl('',[Validators.required])
  });



  get form(): any {
    return this.formEdicao.controls;
  }


  //função para submit para processar o formulário
  onSubmit(): void {


    this.spinner.show();


    this.httpClient.put(
      environment.apiContato + "api/contatos",
      this.formEdicao.value,
      
    )
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
          this.formEdicao.reset();
          window.location.href = "/consultar-contato";
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      })




      .add(
        () => {
          this.spinner.hide();
        }
      )
  }

}
