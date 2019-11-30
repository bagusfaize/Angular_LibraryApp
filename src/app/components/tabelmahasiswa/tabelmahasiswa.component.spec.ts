import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelmahasiswaComponent } from './tabelmahasiswa.component';

describe('TabelmahasiswaComponent', () => {
  let component: TabelmahasiswaComponent;
  let fixture: ComponentFixture<TabelmahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelmahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelmahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
