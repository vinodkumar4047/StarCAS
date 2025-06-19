// dialog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type DialogType = 'success' | 'info' | 'warning' | 'error';

@Injectable({ providedIn: 'root' })
export class DialogService {
  private _visible = new BehaviorSubject<boolean>(false);
  private _message = new BehaviorSubject<{
    title: string;
    content: string;
    type: DialogType;
  }>({ title: '', content: '', type: 'info' });

  visible$ = this._visible.asObservable();
  message$ = this._message.asObservable();

  show(title: string, content: string, type: DialogType = 'info', timeout: number = 1000) {
    this._message.next({ title, content, type });
    this._visible.next(true);

    if (timeout > 0) {
      setTimeout(() => {
        this.hide();
      }, timeout);
    }
  }


  hide() {
    this._visible.next(false);
  }
}
