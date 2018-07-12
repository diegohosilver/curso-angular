import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  const ROUTES: Routes = [
    { path: '', redirectTo: '/test', pathMatch: 'full' }
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterModule.forRoot(ROUTES, {useHash: true})]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
