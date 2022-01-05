import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './router-guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./components/blog/blog.module').then((mod) => mod.BlogModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/weather/weather.module').then(
        (mod) => mod.WeatherModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
