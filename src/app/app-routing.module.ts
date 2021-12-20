import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesListComponent } from './components/ordenes/ordenes-list/ordenes-list.component';
import { OrdenComponent } from './components/ordenes/orden/orden.component';

const routes: Routes = [
  {path: '', component: OrdenesListComponent, pathMatch: 'full'},
  {path: 'ordenes', component: OrdenesListComponent},
  {path: 'orden', component: OrdenComponent},
  {path: 'verOrden/:id', component: OrdenComponent},
  {path: '**', redirectTo: 'ordenes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
