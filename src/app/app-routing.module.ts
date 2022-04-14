import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/cliente/components/list/list.component';
import { EditComponent } from 'src/app/cliente/components/edit/edit.component';
import { AddComponent } from 'src/app/cliente/components/add/add.component';
/////import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
//import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ListComponent },
  { path: 'clientes/:id', component: EditComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }