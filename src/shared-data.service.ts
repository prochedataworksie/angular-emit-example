import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private data = new Subject<any>();
  public data$ = this.data.asObservable();

  constructor() {}

  public saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public setBoard(board: string, emitData: boolean = true) {
    this.saveData('CURRENT_BOARD', board);

    if (emitData) {
      this.data.next(board);
    }
  }
}
