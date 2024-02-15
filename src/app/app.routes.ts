import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './module/home-screen/home-screen.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'smv/home'
    },
    {
        path: 'smv/home',
        component: HomeScreenComponent,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
