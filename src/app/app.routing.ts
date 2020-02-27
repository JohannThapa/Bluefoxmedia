import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RequestComponent } from './request/request.component';
import { WebServicesComponent } from './services/web-services/web-services.component';
import { DesignArtworkComponent } from './services/design-artwork/design-artwork.component';
import { PaperPrintingComponent } from './services/paper-printing/paper-printing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogosComponent } from './portfolio/logos/logos.component';
import { BusinessCardsComponent } from './portfolio/business-cards/business-cards.component';
import { PostersComponent } from './portfolio/posters/posters.component';
import { WebsitesComponent } from './portfolio/websites/websites.component';
import { OthersComponent } from './portfolio/others/others.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'contactus',      component: ContactusComponent },
    { path: 'request-quote', component: RequestComponent},
    { path: 'service/website-online', component: WebServicesComponent},
    { path: 'service/design-artwork', component: DesignArtworkComponent },
    { path: 'service/paper-printing', component: PaperPrintingComponent },
    { path: 'portfolio/logos-branding', component: LogosComponent},
    { path: 'portfolio/business-cards', component: BusinessCardsComponent},
    { path: 'portfolio/flayers-posters', component: PostersComponent},
    { path: 'portfolio/website-online', component: WebsitesComponent},
    { path: 'portfolio/other-services', component: OthersComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
