import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertLogicComponent } from './components/convert-logic/convert-logic.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: ConvertLogicComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
