import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoSenaPage } from './photo-sena.page';

describe('PhotoSenaPage', () => {
  let component: PhotoSenaPage;
  let fixture: ComponentFixture<PhotoSenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhotoSenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
