import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFdComponent } from './add-fd.component';

describe('AddFdComponent', () => {
  let component: AddFdComponent;
  let fixture: ComponentFixture<AddFdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
