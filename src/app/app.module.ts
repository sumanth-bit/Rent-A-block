import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentyourspaceComponent } from './rentyourspace/rentyourspace.component';
import { HomeComponent } from './home/home.component';
import { RentnearyouComponent } from './rentnearyou/rentnearyou.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
/*import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';


import { routing }    from './app-routing.module';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services' */

@NgModule({
  declarations: [
    AppComponent,
    RentyourspaceComponent,
   HomeComponent,
    RentnearyouComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    LoginComponent,
    //LoginComponent,
    //RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [
      /* AuthGuard,
       AlertService,
       AuthenticationService,
       UserService,
       { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

       // provider used to create fake backend
       fakeBackendProvider*/
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
