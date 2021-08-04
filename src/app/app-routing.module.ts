import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Pages/DashBoard/DashBoard.component';
import { IdeasComponent } from './Pages/Ideas/Ideas.component';
import { InitialViewComponent } from './Pages/InitialView/InitialView.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { PrincipalViewComponent } from './Pages/PrincipalView/PrincipalView.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashBoard',
    component: DashBoardComponent,
    children:[
      {
        path: '',
        component: InitialViewComponent
      },
      {
        path: 'principalView',
        component: PrincipalViewComponent,
        children:[
          {
            path: 'ideas',
            component: IdeasComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
