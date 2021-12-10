import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendsNewsComponent } from './suspends-news.component';

describe('SuspendsNewsComponent', () => {
  let component: SuspendsNewsComponent;
  let fixture: ComponentFixture<SuspendsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
