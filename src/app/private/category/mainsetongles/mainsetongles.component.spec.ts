import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsetonglesComponent } from './mainsetongles.component';

describe('MainsetonglesComponent', () => {
  let component: MainsetonglesComponent;
  let fixture: ComponentFixture<MainsetonglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsetonglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsetonglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
