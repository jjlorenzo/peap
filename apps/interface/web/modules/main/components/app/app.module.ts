import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login.form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_GUARD_PROVIDERS } from '../../guards';
import { APP_SERVICE_PROVIDERS } from '../../services';
import { routes } from './app.routes';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,  // this should probably be a NgModule
      LoginFormComponent,  // methinks this should be part of the LoginModule
      DashboardComponent  // this should probably be a NgModule
    ],
    providers: [
      APP_GUARD_PROVIDERS,
      APP_SERVICE_PROVIDERS
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule,
      HttpModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
