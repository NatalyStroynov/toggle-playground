import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicomponentsComponent } from './uicomponents.component';

describe('UicomponentsComponent', () => {
  let component: UicomponentsComponent;
  let fixture: ComponentFixture<UicomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UicomponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UicomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
