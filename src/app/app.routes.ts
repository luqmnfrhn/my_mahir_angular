import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';

export const routes: Routes = [
    {
        path: '', 
        component: HomePage
    },
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'calculator',
        component: CalculatorPage
    }

];
