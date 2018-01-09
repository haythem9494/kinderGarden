import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadParentComponent } from './read-parent.component';

describe('ReadParentComponent', () => {
  let component: ReadParentComponent;
  let fixture: ComponentFixture<ReadParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
