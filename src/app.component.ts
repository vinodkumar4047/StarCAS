import { Component } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { CommonDialogComponent } from "./app/layout/component/dialog/dialog.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonDialogComponent],
  template: `<app-common-dialog></app-common-dialog>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private updates: SwUpdate,private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const token = localStorage.getItem('authToken');
        if (!token && event.url !== '/auth/login') {
          this.router.navigate(['/auth/login']);
        }
      }
    });
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe(event => {
        console.log('Service Worker Update Event:', event.type);  // 👈 Log the event type

        if (event.type === 'VERSION_READY') {
          console.log('VERSION_READY detected. Prompting user to reload.');
          const confirmed = confirm('A new version is available. Reload to update?');
          if (confirmed) {
            document.location.reload();
          }
        }
      });
    }
  }

}
