import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsNewsComponent } from './drafts-news.component';

describe('DraftsNewsComponent', () => {
  let component: DraftsNewsComponent;
  let fixture: ComponentFixture<DraftsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
