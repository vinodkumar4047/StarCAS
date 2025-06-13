import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private messageService: MessageService) { }

  showCenterToast(summary: string, detail: string) {
    this.messageService.add({
      severity: 'info',
      summary,
      detail,
      group: 'center',
      life: 3000
    } as any);
  }

  showDefaultToast(summary: string, detail: string) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      group: 'default',
      life: 9000
    } as any);
  }

  showError(summary: string, detail: string) {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      group: 'center',
      life: 3000
    } as any);
  }
}
