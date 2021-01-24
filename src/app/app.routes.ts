import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components//buscador/buscador.component';
// import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'crear', component: ReactiveComponent },
    { path: 'buscar/:texto', component: BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true} );
