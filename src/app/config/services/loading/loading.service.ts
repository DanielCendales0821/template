import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private readonly spinner: NgxSpinnerService) { }


  /**
   *
   *
   * @return any  {*}
   * @membersof AlertService
   */
  public showSpinner(): any {
    return this.spinner.show();
  }



  /**
   *
   *
   * @return any  {*}
   * @membersof AlertService
   */
  public closeSpinner(): any {
    return this.spinner.hide();
  }
}
