import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneParentComponent } from './read-one-parent.component';

describe('ReadOneParentComponent', () => {
  let component: ReadOneParentComponent;
  let fixture: ComponentFixture<ReadOneParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
