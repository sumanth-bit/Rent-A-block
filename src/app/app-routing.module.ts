import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentyourspaceComponent } from './rentyourspace/rentyourspace.component';
import { RentnearyouComponent } from './rentnearyou/rentnearyou.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {path: 'rentyourspace' , component:RentyourspaceComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'rentnearyou' , component:RentnearyouComponent},
  {path: 'about' , component:AboutComponent },
  {path: 'contact' , component:ContactComponent },
  {path: 'footer', component: FooterComponent},
  {path: 'navigation', component: NavigationComponent},

  {path: "" , component: HomeComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routing = RouterModule.forRoot(routes);
