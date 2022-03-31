import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { ProfileComponent } from './modules/profile/profile.component'
import { NavigationComponent } from './shared/header/navigation.component';
import { CardWithImageComponent } from "./core/components/card-with-image/card-with-image.component";
import {CardWithFormComponent} from "./core/components/card-with-form/card-with-form.component";

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgChipsComponent } from './core/components/ng-chips/ng-chips.component';
import { TagInputModule } from 'ngx-chips';
import { AlertModule } from './core/components/alert/alert.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DesktopLayoutComponent,
    ProfileComponent,
    NavigationComponent,
    CardWithImageComponent,
    CardWithFormComponent,
    NgChipsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TagInputModule,
    AlertModule,
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PerfectScrollbarModule,
    AuthModule.forRoot({
      domain: 'dev-j1x53-8f.us.auth0.com',
      clientId: 'R1A10THLcgAeJAn4QoolyajCw9OyXNjc'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
