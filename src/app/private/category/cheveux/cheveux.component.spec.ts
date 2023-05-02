import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxComponent } from './cheveux.component';

describe('CheveuxComponent', () => {
  let component: CheveuxComponent;
  let fixture: ComponentFixture<CheveuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheveuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
