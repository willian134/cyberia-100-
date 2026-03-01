import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabIaPage } from './lab-ia.page';

describe('LabIaPage', () => {
  let component: LabIaPage;
  let fixture: ComponentFixture<LabIaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LabIaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
