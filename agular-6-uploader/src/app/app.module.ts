import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FileSelectDirective} from 'ng2-file-upload';
import {ProgressbarModule} from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        FileSelectDirective
    ],
    imports: [
        BrowserModule,
        ProgressbarModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
