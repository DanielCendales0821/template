import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentsRoutingModule } from './components.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        NgxSpinnerModule,
        ComponentsRoutingModule
    ],
    exports: [
        HomeComponent,
        LoginComponent
    ],
    providers: [],
})
export class ComponentsModule { }
