import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelbukuComponent } from './tabelbuku.component';

describe('TabelbukuComponent', () => {
  let component: TabelbukuComponent;
  let fixture: ComponentFixture<TabelbukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelbukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelbukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
