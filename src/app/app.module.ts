import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentyourspaceComponent } from './rentyourspace/rentyourspace.component';
import { HomeComponent } from './home/home.component';
import { RentnearyouComponent } from './rentnearyou/rentnearyou.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthModule } from './auth/auth.module';



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

  //  LoginComponent,
    //LoginComponent,
    //RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule

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
