import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProduitdetailComponent } from './components/produitdetail/produitdetail.component';
import { ProduitService } from './services/produit.service';
import { ClientComponent } from './components/client/client.component';
import { ClientdetailComponent } from './components/clientdetail/clientdetail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ProduitdetailComponent,
    ClientComponent,
    ClientdetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
