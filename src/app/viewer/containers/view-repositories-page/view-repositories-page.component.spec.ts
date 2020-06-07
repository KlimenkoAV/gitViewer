import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepositoriesPageComponent } from './view-repositories-page.component';

describe('ViewRepositoriesPageComponent', () => {
  let component: ViewRepositoriesPageComponent;
  let fixture: ComponentFixture<ViewRepositoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRepositoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepositoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
