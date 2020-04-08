import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hero/list/page/1' },
  { path: 'hero/list/page/:index', component: ListComponent },
  {path:'noutfound',component:NotfoundComponent},
  { path: 'hero/detail/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
