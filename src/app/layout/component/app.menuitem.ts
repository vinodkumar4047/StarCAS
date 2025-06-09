import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RippleModule } from 'primeng/ripple';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LayoutService } from '../service/layout.service';
import { MenuItem } from 'primeng/api';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: '[app-menuitem]',
    standalone: true,
    imports: [CommonModule, RouterModule, RippleModule, LucideAngularModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('submenu', [
            state('collapsed', style({ height: '0', overflow: 'hidden' })),
            state('expanded', style({ height: '*', overflow: 'visible' })),
            transition('collapsed <=> expanded', animate('400ms ease-in-out'))
        ])
    ],
    template: `
    <ng-container>
      <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">
        {{ item.label }}
      </div>

      <!-- Anchor for item with children or external URL -->
      <a *ngIf="(!item.routerLink || item.items) && item.visible !== false"
         [attr.href]="item.url"
         (click)="itemClick($event)"
         [ngClass]="item.styleClass"
         [attr.target]="item.target"
         tabindex="0"
         pRipple>
         
        <lucide-icon *ngIf="item.icon" [name]="item.icon" class="layout-menuitem-icon"></lucide-icon>
        <span class="layout-menuitem-text">{{ item.label }}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
      </a>

      <!-- Anchor for internal routerLink without children -->
      <a *ngIf="item.routerLink && !item.items && item.visible !== false"
         (click)="itemClick($event)"
         [ngClass]="item.styleClass"
         [routerLink]="item.routerLink"
         routerLinkActive="active-route"
         [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact' }"
         [queryParams]="item.queryParams"
         [fragment]="item.fragment"
         [queryParamsHandling]="item.queryParamsHandling"
         [preserveFragment]="item.preserveFragment"
         [skipLocationChange]="item.skipLocationChange"
         [replaceUrl]="item.replaceUrl"
         [state]="item.state"
         [attr.target]="item.target"
         tabindex="0"
         pRipple>
         
        <lucide-icon *ngIf="item.icon" [name]="item.icon" class="layout-menuitem-icon"></lucide-icon>
        <span class="layout-menuitem-text">{{ item.label }}</span>
      </a>

      <!-- Submenu -->
      <ul *ngIf="item.items && item.visible !== false"
          [@submenu]="submenuAnimation">
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
          <li app-menuitem
              [item]="child"
              [index]="i"
              [parentKey]="key"
              [class]="child['badgeClass']"></li>
        </ng-template>
      </ul>
    </ng-container>
  `,
    styles: [`
    .layout-menuitem-icon {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `]
})
export class AppMenuitem implements OnInit, OnDestroy {
    @Input() item!: MenuItem;
    @Input() index!: number;
    @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
    @Input() parentKey!: string;

    key = '';
    active = false;

    private menuSourceSubscription!: Subscription;
    private menuResetSubscription!: Subscription;

    constructor(
        public router: Router,
        public layoutService: LayoutService,
        public cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        console.log(`Menu Item: ${this.item.label}, Icon: ${this.item.icon}`);
        this.key = this.parentKey ? `${this.parentKey}-${this.index}` : String(this.index);

        this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
            Promise.resolve().then(() => {
                if (value.routeEvent) {
                    this.active = value.key === this.key || value.key.startsWith(this.key + '-');
                } else {
                    if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                        this.active = false;
                    }
                }

                this.cd.markForCheck();
            });
        });

        this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
            this.active = false;
            this.cd.markForCheck();
        });

        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                if (this.item.routerLink) {
                    this.updateActiveStateFromRoute();
                }
            });

        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    itemClick(event: Event) {
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }

        if (this.item.items) {
            this.active = !this.active;
        }

        this.layoutService.onMenuStateChange({ key: this.key });
        this.cd.markForCheck();
    }

    updateActiveStateFromRoute() {
        let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

        if (activeRoute) {
            this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
        }

    }

    get submenuAnimation() {
        return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
    }

    @HostBinding('class.active-menuitem')
    get activeClass() {
        return this.active && !this.root;
    }

    ngOnDestroy() {
        this.menuSourceSubscription?.unsubscribe();
        this.menuResetSubscription?.unsubscribe();
    }
}
