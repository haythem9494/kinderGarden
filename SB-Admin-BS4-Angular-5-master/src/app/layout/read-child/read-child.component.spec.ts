import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadChildComponent } from './read-child.component';

describe('ReadChildComponent', () => {
  let component: ReadChildComponent;
  let fixture: ComponentFixture<ReadChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
