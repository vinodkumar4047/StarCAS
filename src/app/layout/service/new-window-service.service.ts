import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  createComponent,
  Type
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewWindowServiceService {

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openNewWindow(component: Type<any>): Window | null {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    if (!newWindow) return null;

    // Clone styles from current document
    document.querySelectorAll('style, link[rel="stylesheet"]').forEach(style => {
      newWindow.document.head.appendChild(style.cloneNode(true));
    });

    // Create container for Angular component
    const containerEl = newWindow.document.createElement('div');
    newWindow.document.body.appendChild(containerEl);

    // ✅ Create component using new API
    const componentRef: ComponentRef<any> = createComponent(component, {
      environmentInjector: this.appRef.injector, // or inject your own `EnvironmentInjector` if available
      elementInjector: this.injector
    });

    // Attach component view
    this.appRef.attachView(componentRef.hostView);

    // Append to new window DOM
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    containerEl.appendChild(domElem);

    return newWindow;
  }
}
