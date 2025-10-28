import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { DirectivePage } from './pages/directive-page/directive-page';
import { ToDoPage } from './pages/to-do-page/to-do-page';

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
    },
    {
        path: 'directive',
        component: DirectivePage
    },
    {
        path: 'to-do',
        component: ToDoPage
    }

];
