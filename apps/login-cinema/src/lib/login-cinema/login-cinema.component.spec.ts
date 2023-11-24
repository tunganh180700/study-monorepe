import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCinemaComponent } from './login-cinema.component';

describe('LoginCinemaComponent', () => {
  let component: LoginCinemaComponent;
  let fixture: ComponentFixture<LoginCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCinemaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
