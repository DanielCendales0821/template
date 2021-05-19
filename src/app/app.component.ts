import { Component } from '@angular/core';
import { LoadingService } from './config/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(readonly loading: LoadingService) {
    this.loading.showSpinner();
    setTimeout(() => {
      this.loading.closeSpinner();
    }, 3000);
  }
}
