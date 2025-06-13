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

  show(title: string, content: string, type: DialogType = 'info') {
    this._message.next({ title, content, type });
    this._visible.next(true);
  }

  hide() {
    this._visible.next(false);
  }
}
