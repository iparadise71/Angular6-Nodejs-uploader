import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppComponent } from './app.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ImageUploadModule } from 'angular2-image-upload';
import {FileUploaderService} from './file-uploader-service';
import {HttpClientModule} from '@angular/common/http';
import {NgxFsModule} from 'ngx-fs';
@NgModule({
    declarations: [
        AppComponent,
        FileSelectDirective
    ],
    imports: [
        BrowserModule,
        ImageCropperModule,
        HttpClientModule,
        ProgressbarModule.forRoot(),
        ImageUploadModule.forRoot(),
        NgxFsModule
    ],
    providers: [FileUploaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
