import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./topicchoose/topicchoose.module').then( m => m.TopicchoosePageModule)
  },
  {
    path: '',
    redirectTo: 'topicchoose',
    pathMatch: 'full'
  },
  {
    path: 'topicchoose',
    loadChildren: () => import('./topicchoose/topicchoose.module').then( m => m.TopicchoosePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'choosecountry',
    loadChildren: () => import('./choosecountry/choosecountry.module').then( m => m.ChoosecountryPageModule)
  },
  {
    path: 'line-chart',
    loadChildren: () => import('./line-chart/line-chart.module').then( m => m.LineChartPageModule)
  },
  // {
  //   path: 'filter',
  //   loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  // },
  {
    path: 'countryranking',
    loadChildren: () => import('./countryranking/countryranking.module').then( m => m.CountryrankingPageModule)
  },
  {
    path: 'countryprofileaccordion',
    loadChildren: () => import('./countryprofileaccordion/countryprofileaccordion.module').then( m => m.CountryprofileaccordionPageModule)
  },
  {
    path: 'timeseries',
    loadChildren: () => import('./timeseries/timeseries.module').then( m => m.TimeseriesPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },  {
    path: 'indiamap',
    loadChildren: () => import('./indiamap/indiamap.module').then( m => m.IndiamapPageModule)
  },
  {
    path: 'bloglist',
    loadChildren: () => import('./bloglist/bloglist.module').then( m => m.BloglistPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
