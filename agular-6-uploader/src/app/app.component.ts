import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FileItem, FileLikeObject, FileUploader} from 'ng2-file-upload';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {FileQueueObject, FileUploaderService} from './file-uploader-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [ FileUploaderService ]
})
export class AppComponent implements OnInit {
    public name = 'linea27';
    public uploader: FileUploader = new FileUploader({url: 'http://35.193.183.237:3001/upload'});
    // public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});
    imageChangedEvent: any = '';
    croppedImage: any = '';
    croppedImage2: any = '';
    cropperReady = false;
    imagePath: any;
    @Output() onCompleteItem = new EventEmitter();
    @ViewChild('fileInput') fileInput;
    @ViewChild('fileInputImg') fileInputImg;

    constructor(private _sanitizer: DomSanitizer) { }
    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            // console.log('ImageUpload:uploaded: ', item, status, response);
            console.log('ImageUpload:uploaded: ', status);
            console.log('ImageUpload:uploaded: ', response);
        };
        // this.queue = this.uploader.queue;
        // this.uploader.onCompleteItem = this.completeItemData;
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCroppedBase64(image: string) {
        this.croppedImage = image;
        // this.uploader.
    }
    imageCroppedFile(image) {
        this.croppedImage2 = image;
        // this.uploader.
    }
    imageLoaded() {
        this.cropperReady = true;
    }
    loadImageFailed () {
        console.log('Load failed');
    }

    veremos() {
        console.log(this.imageChangedEvent);
        console.log(this.croppedImage);
        console.log(this.croppedImage2);
        const block = this.croppedImage.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        let f = new File([this.croppedImage2], 'samyData.png', {type: contentType});
        this.uploader.addToQueue([f]);
        // this.uploader.addToQueue([new File([new Blob([this.croppedImage])]);

        console.log(this.uploader);
    }

    descripcion() {
        // for (const image of this.uploader.queue) {
        //     console.log(image);
        //     console.log(this.imageChangedEvent);
        //     console.log(this.croppedImage);
        //     console.log(this.croppedImage2);
        // }
    }

    setImageCropped() {
        let file: FileLikeObject;
        // file = this.croppedImage2;
        // file.name = 'linea27.jpg';
        // let fileItem: FileItem;
        // fileItem = file;
        let fileA = new Array();
        fileA.push(this.croppedImage2);
        this.uploader.addToQueue([new File(this.croppedImage, 'emptyTestFile')]);
        // this.uploader.addToQueue(fileA, {url: 'http://35.193.183.237:3001/upload'});
    }

    // ********************************************************

    addToQueue() {
        const fileBrowser = this.fileInput.nativeElement;
        const fileBrowserq = this.fileInputImg.nativeElement;
        this.uploader.addToQueue(fileBrowser.files);
        console.log(this.uploader);
        console.log(fileBrowser);
        console.log(fileBrowser.files);
        console.log(fileBrowserq);
        console.log(fileBrowserq.files);
    }
}
