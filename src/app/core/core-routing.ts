import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('src/app/pages/payment/payment.module').then(mod => mod.PaymentModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/pages/page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)
  }
];
