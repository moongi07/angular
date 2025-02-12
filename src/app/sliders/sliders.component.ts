import { Component,Output, EventEmitter  } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sliders',
  imports: [MatSlideToggleModule,FormsModule],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css'
})
export class SlidersComponent {
  isDarkMode: boolean = false;

  @Output() darkModeChanged = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    this.darkModeChanged.emit(this.isDarkMode);
  }


}
