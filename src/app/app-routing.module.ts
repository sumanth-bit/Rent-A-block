import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentyourspaceComponent } from './rentyourspace/rentyourspace.component';
import { RentnearyouComponent } from './rentnearyou/rentnearyou.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path: 'rentyourspace' , component:RentyourspaceComponent, canActivate:[AuthGuard]},
  {path: 'home' , component: HomeComponent},
  {path: 'rentnearyou' , component:RentnearyouComponent,canActivate:[AuthGuard]},
  {path: 'about' , component:AboutComponent },
  {path: 'contact' , component:ContactComponent },
  {path: 'footer', component: FooterComponent},
  {path: 'navigation', component: NavigationComponent},

  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'reset-password' , component: ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routing = RouterModule.forRoot(routes);
