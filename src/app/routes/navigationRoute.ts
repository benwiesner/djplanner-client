import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";

export const navigationRoute = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: NavigationBarComponent,
        data: {title: 'Nav Bar'}
    }
]

