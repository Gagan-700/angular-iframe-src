import { Component, VERSION } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  pdfSrc:string = 'https://www.orimi.com/pdf-test.pdf';
  img = 'https://picsum.photos/id/237/200/300';
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }
}
