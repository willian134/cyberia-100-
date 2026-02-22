import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagenesPage } from './imagenes.page';

describe('ImagenesPage', () => {
  let component: ImagenesPage;
  let fixture: ComponentFixture<ImagenesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//
@media (max-width: 768px) {

  .hero {
    padding: 40px 15px;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .intro {
    padding: 20px 15px;
  }

  .intro h2 {
    font-size: 1.4rem;
  }

  .intro p {
    font-size: 0.95rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .card {
    width: 100%;
    max-width: 320px;
    height: 280px;
  }

}