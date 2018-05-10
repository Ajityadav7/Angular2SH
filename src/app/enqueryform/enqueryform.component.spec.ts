import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryformComponent } from './enqueryform.component';

describe('EnqueryformComponent', () => {
  let component: EnqueryformComponent;
  let fixture: ComponentFixture<EnqueryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqueryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
