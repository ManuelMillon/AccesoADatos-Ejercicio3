import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignmentCalendarComponent } from './assignment-calendar.component';

describe('AssignmentCalendarComponent', () => {
  let component: AssignmentCalendarComponent;
  let fixture: ComponentFixture<AssignmentCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCalendarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
