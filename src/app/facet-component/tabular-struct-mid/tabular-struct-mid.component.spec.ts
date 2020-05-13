import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularStructMidComponent } from './tabular-struct-mid.component';

describe('TabularStructMidComponent', () => {
  let component: TabularStructMidComponent;
  let fixture: ComponentFixture<TabularStructMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularStructMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularStructMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
