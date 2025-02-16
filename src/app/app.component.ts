import { Component } from '@angular/core';
import { ImageSliderRotateComponent } from '../components/image-slider-rotate/image-slider-rotate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ImageSliderRotateComponent],
})
export class AppComponent {
  title = 'CSS-Animations';
}
