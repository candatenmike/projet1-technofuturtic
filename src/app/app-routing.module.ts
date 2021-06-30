import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProduitdetailComponent } from './components/produitdetail/produitdetail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'produit',component:ProduitComponent},
  {path:'produit/:id',component:ProduitdetailComponent},
  {path:'client',component:ClientComponent},
  {path:'client/:id',component:ClientdetailComponent},
  {path: '**' , redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
