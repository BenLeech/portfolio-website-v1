import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrisSoterosComponent } from './chris-soteros.component';

describe('ChrisSoterosComponent', () => {
  let component: ChrisSoterosComponent;
  let fixture: ComponentFixture<ChrisSoterosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChrisSoterosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrisSoterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
