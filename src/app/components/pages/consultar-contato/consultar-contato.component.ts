import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-consultar-contato',
  templateUrl: './consultar-contato.component.html',
  styleUrls: ['./consultar-contato.component.css']
})
export class ConsultarContatoComponent {
 
  
  mensagem: string = '';
  contatos: any[] = [];
  
  searchText ='';

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
    
  ) {
    

    this.onInit();
  }

  onInit(): void {

    this.spinner.show();
    

    this.httpClient.get(
      environment.apiContato + "api/contatos",
      
    )
      .subscribe({
        next: (data) => {
          this.contatos = data as any[];
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      }).add(
        () => {
          this.spinner.hide();
        }
      )
      
  }


  onDelete(idContato: string): void {


    if (window.confirm('Deseja excluir o cliente?')) {
     


      this.httpClient.delete(
        environment.apiContato + "api/contatos/" + idContato,
        
      )
        .subscribe({
          next: (data: any) => {
            this.mensagem = data.mensagem;
            this.onInit();
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

}