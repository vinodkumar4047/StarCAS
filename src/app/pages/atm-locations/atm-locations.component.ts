import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-atm-locations',
  imports: [CommonModule,ButtonModule],
  templateUrl: './atm-locations.component.html',
  styleUrl: './atm-locations.component.scss'
})
export class AtmLocationsComponent {
  mapUrl: SafeResourceUrl | undefined;
  locat: string = 'New York';  
  @ViewChild('mapFrame') mapFrame!: ElementRef;
  constructor(private sanitizer: DomSanitizer) {
    this.updateMap()
  }

  updateMap() {
    const query = encodeURIComponent(this.locat);
    // const url = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}`;
    const url = " https://maps.google.com/maps?q=40.5509,-105.0668&output=svembed"
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

   goFullScreen(): void {
    const iframeElement = this.mapFrame.nativeElement;
    if (iframeElement.requestFullscreen) {
      iframeElement.requestFullscreen();
    } else if (iframeElement.webkitRequestFullscreen) { /* Safari */
      iframeElement.webkitRequestFullscreen();
    } else if (iframeElement.msRequestFullscreen) { /* IE11 */
      iframeElement.msRequestFullscreen();
    }
  }
}
