import { Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'cadastro', component: CadastroComponent}
]
