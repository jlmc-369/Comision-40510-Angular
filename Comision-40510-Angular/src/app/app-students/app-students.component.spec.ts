import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStudentsComponent } from './app-students.component';

describe('AppStudentsComponent', () => {
  let component: AppStudentsComponent;
  let fixture: ComponentFixture<AppStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
