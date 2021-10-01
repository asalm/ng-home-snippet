import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginModule } from '../../../environments/environment';
import {RouterTestingModule} from "@angular/router/testing";
import {AppConfigService} from "@appframets/angular-configuration";
import {RequestResponseTestingModule} from "@appframets/rrp-angular";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RequestResponseTestingModule, RouterTestingModule.withRoutes([]), LoginModule],
      providers: [AppConfigService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

