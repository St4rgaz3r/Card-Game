import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atexo-card-game';
  isDark = false;


  public toggleTheme() {
     if (this.isDark == false) {
          this.isDark = true;
          document.querySelector('body').classList.add('dark');
     } else {
          this.isDark = false;
          document.querySelector('body').classList.remove('dark');
     }
  }

}
