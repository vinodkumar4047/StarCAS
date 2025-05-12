// new-window.service.ts
import { Injectable, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef, createComponent, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewWindowService {

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openNewWindow(component: Type<any>): Window | null {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    if (!newWindow) return null;

    // Step 1: Clone global styles from the parent document to the new window
    document.querySelectorAll('style, link[rel="stylesheet"]').forEach(style => {
      newWindow.document.head.appendChild(style.cloneNode(true));
    });

    // Step 2: Create a container for the Angular component
    const containerEl = newWindow.document.createElement('div');
    newWindow.document.body.appendChild(containerEl);

    // Step 3: Dynamically create the Angular component
    const componentRef: ComponentRef<any> = createComponent(component, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector
    });

    // Step 4: Attach the component's view to the application
    this.appRef.attachView(componentRef.hostView);

    // Step 5: Append the component's DOM element to the new window
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    containerEl.appendChild(domElem);

    return newWindow;
  }
}
