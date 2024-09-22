import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';

  displayResume() {
    // Open the resume image in a new tab
    window.open('assets/Anindita_Deb_Resume.png', '_blank');
  }

}