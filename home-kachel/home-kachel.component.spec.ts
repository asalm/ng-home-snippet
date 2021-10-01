import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule} from "@angular/router/testing";
import { HomeKachelComponent } from './home-kachel.component';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

describe('HomeKachelComponent', () => {
  let component: HomeKachelComponent;
  let fixture: ComponentFixture<HomeKachelComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKachelComponent, TestHostComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKachelComponent);
    component = fixture.componentInstance;
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    fixture.detectChanges();
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate basic', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.OnLinkClick('/naturschutzbuch/geschuetztebiotope');
    expect(navigateSpy).toHaveBeenCalledWith(['/naturschutzbuch/geschuetztebiotope']);
    component.OnCardClick('/home');
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });

  /*
  @Input() Aufgaben: Array<Object>;
  */
  it('should render input id', () => {
    testHostComponent.componentUnderTestComponent._id = 'test-id';
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div.kachel').id).toEqual('test-id');
  });

  it('should navigate specific', () => {
    testHostComponent.componentUnderTestComponent.Click = '/naturschutzbuch/geschuetztebiotope';
    const navigateSpy = spyOn(router, 'navigate');
    testHostFixture.detectChanges();
    testHostComponent.componentUnderTestComponent.OnLinkClick(testHostComponent.componentUnderTestComponent.Click);
    expect(navigateSpy).toHaveBeenCalledWith(['/naturschutzbuch/geschuetztebiotope']);

  });

  it('should render title',() => {
    testHostComponent.componentUnderTestComponent.Title = "Testtitle";
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div.title').innerHTML).toEqual("Testtitle");
  });

  it('should render aufgabenlist', () => {
    testHostComponent.componentUnderTestComponent.Aufgaben = [
      {title: "Geschützte Biotope",link:"naturschutzbuch/geschuetztebiotope"},
      {title: "FFH-LRT",link:"ffhlrt"},
      {title: "Nationale Schutzgebiete",link:"nationaleschutzgebiete"},
      {title: "Europäische Schutzgebiete",link:"europaeischeschutzgebiete"},
      {title: "Wald",link:"naturschutzbuchwald"}];
      testHostFixture.detectChanges();
      let listItems = testHostFixture.nativeElement.querySelectorAll('li p');
      expect(listItems[0].innerHTML).toBe('Geschützte Biotope');
      expect(listItems[1].innerHTML).toBe('FFH-LRT');
      expect(listItems[2].innerHTML).toBe('Nationale Schutzgebiete');

  });


});

@Component({
  selector: `host-component`,
  template: `<skums-nis-home-kachel></skums-nis-home-kachel>`
})
class TestHostComponent {
  @ViewChild(HomeKachelComponent)
  public componentUnderTestComponent: HomeKachelComponent;
}

