import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesarrolloWebComponent } from './pages/desarrollo-web/desarrollo-web.component';
import { SoftwareAMedidaComponent } from './pages/software-a-medida/software-a-medida.component';
import { AplicacionesMovilesComponent } from './pages/aplicaciones-moviles/aplicaciones-moviles.component';
import { IaAutomatizacionComponent } from './pages/ia-automatizacion/ia-automatizacion.component';
import { CasosDeExitoComponent } from './pages/casos-de-exito/casos-de-exito.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desarrollo-web', component: DesarrolloWebComponent },
  { path: 'software-a-medida', component: SoftwareAMedidaComponent },
  { path: 'aplicaciones-moviles', component: AplicacionesMovilesComponent },
  { path: 'inteligencia-artificial-y-automatizacion', component: IaAutomatizacionComponent },
  { path: 'casos-de-exito', component: CasosDeExitoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'politica-de-privacidad', component: PoliticaPrivacidadComponent },
  // Ruta estática dedicada: se pre-renderiza a /404/index.html y se copia como 404.html
  // en el build para que el hosting pueda servir un 404 real (ver deploy-frontend.sh).
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];
