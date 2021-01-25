import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


//Rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { ProductosService } from './services/productos.service';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { ReactiveComponent } from './pages/agregar/agregar.component';
import { TemplateComponent } from './pages/template/template.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  exports: [
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    ProductoComponent,
    BuscadorComponent,
    CardProductoComponent,
    ReactiveComponent,
    TemplateComponent,
    ConfirmarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
