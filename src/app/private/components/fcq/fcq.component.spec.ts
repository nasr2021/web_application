import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcqComponent } from './fcq.component';

describe('FcqComponent', () => {
  let component: FcqComponent;
  let fixture: ComponentFixture<FcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
