import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { PlanetComponent } from './pages/destination/components/planet/planet.component';
import { planetResolver } from './pages/destination/components/planet/resolver/planet.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent,
    title: 'Home'
  },
  {
    path: 'destination',
    loadComponent: () => import('./pages/destination/destination.component')
      .then(m => m.DestinationComponent),
    title: 'Destination',
    children: [
      { path: '', redirectTo: 'moon', pathMatch: 'full' },
      {
        path: ':name',
        component: PlanetComponent,
        resolve: { planet: planetResolver }
      }
    ]
  }
];
