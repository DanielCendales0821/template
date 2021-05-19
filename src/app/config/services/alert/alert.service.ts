import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Messages } from '../../enum/alert.enum';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public title = '';
  constructor() {
  }


  public openConfirmAction(): any {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }



  /**
   *
   *
   * @params {*} msg
   * @params {*} type
   * @return any  {*}
   * @membersof AlertService
   */
  public openMessage(msg, type): any {
    if (type === Messages.success) {
      this.title = Messages.titleSuccess;
    } else {
      this.title = Messages.titleError;
    }
    return Swal.fire(this.title, msg, type);
  }


}
