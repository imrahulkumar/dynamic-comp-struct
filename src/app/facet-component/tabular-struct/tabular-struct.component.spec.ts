import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularStructComponent } from './tabular-struct.component';

describe('TabularStructComponent', () => {
  let component: TabularStructComponent;
  let fixture: ComponentFixture<TabularStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
