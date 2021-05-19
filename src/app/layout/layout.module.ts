import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        NgxSpinnerModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        LoadingComponent
    ],
    providers: [],
})
export class LayoutModule { }
