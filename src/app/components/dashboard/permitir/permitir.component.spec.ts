import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitirComponent } from './permitir.component';

describe('PermitirComponent', () => {
  let component: PermitirComponent;
  let fixture: ComponentFixture<PermitirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermitirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
