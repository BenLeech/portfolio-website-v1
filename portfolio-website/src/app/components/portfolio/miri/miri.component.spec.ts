import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiriComponent } from './miri.component';

describe('MiriComponent', () => {
  let component: MiriComponent;
  let fixture: ComponentFixture<MiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
