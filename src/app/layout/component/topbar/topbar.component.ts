
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { Popover, PopoverModule } from 'primeng/popover';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, PopoverModule,
    ImageModule, BadgeModule, OverlayBadgeModule, AvatarModule, TooltipModule, ButtonModule],
})
export class TopbarComponent {
  items!: MenuItem[];
  @ViewChild('op') op!: Popover;
  @ViewChild('op1') op1!: Popover;
  img: any = 'assets/images/Frame_8.png'
  selectedMember = null;
  selectedmemeber1 = null;
  members1 = [
    { name: 'Critical ATM TEST022' },
    { name: 'Critical ATM TEST024' },
    { name: 'Critical ATM TEST030' },
    { name: 'See All Message' }
  ];
  members = [
    { name: 'My Profile' },
    { name: 'Change Password' },
    { name: 'ATM Location' },
    { name: 'Log Out' },
  ];
  isFullScreen = false;
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  userImageUrl: any = 'assets/images/Avatar.png';
  constructor(public layoutService: LayoutService, private router: Router) { }
  // Check if the browser supports fullscreen API
  isFullscreen(): boolean {
    return (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    ) !== null;
  }

  // Toggle between entering and exiting full-screen mode
  toggleFullScreen() {
    if (this.isFullScreen) {
      this.exitFullScreen();
    } else {
      this.enterFullScreen();
    }
  }

  // Enter full-screen mode
  enterFullScreen() {
    const element = document.documentElement as HTMLElement; // Type assertion

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) { // Safari
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).mozRequestFullScreen) { // Firefox
      (element as any).mozRequestFullScreen();
    } else if ((element as any).msRequestFullscreen) { // IE/Edge
      (element as any).msRequestFullscreen();
    }
    this.isFullScreen = true;
  }

  // Exit full-screen mode
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    this.isFullScreen = false;
  }

  toggle(event: any) {
    this.op.toggle(event);
  }
  togglepo1(event: any) {
    this.op1.toggle(event);
  }
  selectMember(member: any) {
    this.selectedMember = member;
    this.op1.hide();
  }
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
  }
  atmLocationAction() {
    this.router.navigate(['/pages/atm_Monitoring']);
    this.op1.hide();
  }
  profileAction(member: any) {
    this.selectedMember = member;
    console.log(member, 'member----');
    if (member.name == 'Log Out') {
      this.router.navigate(['/auth/login']);
    } else if (member.name == 'My Profile') {
      this.router.navigate(['/pages/edit_profile']);
    } else if (member.name == 'Change Password') {
      this.router.navigate(['/pages/change_password']);
    } else if (member.name == 'ATM Location') {
      this.router.navigate(['/pages/atm_location'])
    }
    this.op.hide();``
  }

  getIconForMember(name: string): string {
    switch (name) {
      case 'My Profile':
        return 'pi pi-user';  // Icon for 'My Profile'
      case 'Change Password':
        return 'pi pi-key';   // Icon for 'Change Password'
      case 'ATM Location':
        return 'pi pi-map-marker'; // Icon for 'ATM Location'
      case 'Log Out':
        return 'pi pi-sign-out';   // Icon for 'Log Out'
      default:
        return 'pi pi-question'; // Default icon for unknown names
    }
  }
}

