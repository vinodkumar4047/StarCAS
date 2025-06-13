// common-dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DialogType } from '../commonDialog.service';
import { NgIf } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-common-dialog',
  imports: [CommonModule, DialogModule,],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class CommonDialogComponent implements OnInit {
  visible = false;
  title = '';
  content = '';
  type: DialogType = 'info';

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.visible$.subscribe(v => this.visible = v);
    this.dialogService.message$.subscribe(({ title, content, type }) => {
      this.title = title;
      this.content = content;
      this.type = type;
    });
  }

  onHide() {
    this.dialogService.hide();
  }

  get icon(): string {
    const icons: Record<DialogType, string> = {
      success: 'pi pi-check-circle',
      info: 'pi pi-info-circle',
      warning: 'pi pi-exclamation-triangle',
      error: 'pi pi-times-circle'
    };
    return icons[this.type];
  }

  get headerClass(): string {
    return `dialog-header-${this.type}`;
  }
  
}
