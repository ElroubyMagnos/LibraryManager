import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AnonhomeComponent } from './anonhome/anonhome.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { authGuard } from './auth.guard';
import { secondauthguardGuard } from './secondauthguard.guard';
import { UploadpdfComponent } from './uploadpdf/uploadpdf.component';
import { uploadguardGuard } from './uploadguard.guard';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { laststepGuard } from './laststep.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DropdownMenuComponent,
    SigninComponent,
    SignupComponent,
    SpinnerComponent,
    UploadpdfComponent,
    SendrequestComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [authGuard]},
      {path: 'upload', component: UploadpdfComponent, canActivate: [authGuard, uploadguardGuard]},
      {path: 'last', component: SendrequestComponent, canActivate: [authGuard, uploadguardGuard, laststepGuard]},
      {path: 'logouthome', component: AnonhomeComponent, canActivate: [secondauthguardGuard]},
      {path: 'signup', component: SignupComponent, canActivate: [secondauthguardGuard]},
      {path: 'signin', component: SigninComponent, canActivate: [secondauthguardGuard]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
