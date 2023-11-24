import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => import('@demo/login').then((m) => m.LoginComponent),
    }
];
