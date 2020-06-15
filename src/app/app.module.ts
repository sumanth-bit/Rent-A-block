import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentyourspaceComponent } from './rentyourspace/rentyourspace.component';
import { HomeComponent } from './home/home.component';
import { RentnearyouComponent } from './rentnearyou/rentnearyou.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
//import {AuthserviceService} from './authservice.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

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
    ResetPasswordComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AuthModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    AuthService,EventService,AuthGuard,
       {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenInterceptorService,
         multi: true
       }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
