import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CalendarioComponent } from "./calendario/calendario.component";
import { MensajeComponent } from "./mensaje/mensaje.component";
import { SlidersComponent } from "./sliders/sliders.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CalendarioComponent, MensajeComponent, SlidersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio';
  isDarkMode: boolean = false;

  

  onDarkModeChanged(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    
    if (this.isDarkMode) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  
}
