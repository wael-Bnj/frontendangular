import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosaureComponent } from './components/dinosaure/dinosaure.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: '', component: DinosaureComponent },
  { path: "login", component: UserComponent },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
