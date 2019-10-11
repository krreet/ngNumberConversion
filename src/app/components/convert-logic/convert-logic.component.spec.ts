import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertLogicComponent } from './convert-logic.component';
import { FormsModule } from '@angular/forms';
describe('MytestComponent', () => {
  let component: ConvertLogicComponent;
  let fixture: ComponentFixture<ConvertLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ ConvertLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should convert normal number to roman number', () => {
    component.convertNumber = 123;
    const button = fixture.debugElement.nativeElement.querySelector('.btn-info');
    button.click();
    expect(component.finalresult).toEqual('CXXIII');
  });
  it('Number must be greater then 0', () => {
    component.convertNumber = 0;
    const button = fixture.debugElement.nativeElement.querySelector('.btn-info');
    button.click();
    expect(component.finalresult).toEqual('Value must be greater then 0 and less then 10000');
  });

  it('Number must be less then 10000', () => {
    component.convertNumber = 11000;
    const button = fixture.debugElement.nativeElement.querySelector('.btn-info');
    button.click();
    expect(component.finalresult).toEqual('Value must be greater then 0 and less then 10000');
  });
});
