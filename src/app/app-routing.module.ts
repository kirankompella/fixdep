import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FdListComponent } from './fd-list/fd-list.component';
import { DetailsComponent } from './details/details.component';
import { AddFdComponent } from './add-fd/add-fd.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: FdListComponent },
  { path: 'details/:id', component:DetailsComponent},
  { path: 'new', component:AddFdComponent},
  { path: '',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
