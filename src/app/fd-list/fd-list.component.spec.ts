import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdListComponent } from './fd-list.component';

describe('FdListComponent', () => {
  let component: FdListComponent;
  let fixture: ComponentFixture<FdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
