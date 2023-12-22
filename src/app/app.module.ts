import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";




import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CadastrarContatoComponent } from './components/pages/cadastrar-contato/cadastrar-contato.component';
import { ConsultarContatoComponent } from './components/pages/consultar-contato/consultar-contato.component';
import { EditarContatoComponent } from './components/pages/editar-contato/editar-contato.component';
import { SearchPipe } from './search.pipe';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consultar-contato' },
  { path: 'cadastrar-contato', component: CadastrarContatoComponent },
  { path: 'consultar-contato', component: ConsultarContatoComponent },
  { path: 'editar-contato/:id', component: EditarContatoComponent }
  

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastrarContatoComponent,
    ConsultarContatoComponent,
    EditarContatoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
