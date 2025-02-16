import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderRotateComponent } from './image-slider-rotate.component';

describe('ImageSliderRotateComponent', () => {
  let component: ImageSliderRotateComponent;
  let fixture: ComponentFixture<ImageSliderRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSliderRotateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSliderRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
