
import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../app.configurator';
import { LayoutService } from '../../service/layout.service';
import { Popover, PopoverModule } from 'primeng/popover';
import { ImageModule } from 'primeng/image';
@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, PopoverModule,ImageModule],
})
export class TopbarComponent {
    items!: MenuItem[];
    @ViewChild('op') op!: Popover;
    img:any = 'assets/images/starcas-logo.png'
    selectedMember = null;

    members = [
        { name: 'My Profile', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        { name: 'Change Password', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
        { name: 'ATM Location', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
        { name: 'Log Out', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
    ];
    constructor(public layoutService: LayoutService, private router : Router) { }


    toggle(event: any) {
        this.op.toggle(event);
    }

    selectMember(member: any) {
        this.selectedMember = member;
        this.op.hide();
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    profileAction(member:any){
        console.log(member,'member----');
        if(member.name == 'Log Out'){
            this.router.navigate(['/landing']);
        }
    }

    getIconForMember(name: string): string {
        switch(name) {
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

