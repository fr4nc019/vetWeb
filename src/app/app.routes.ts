import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [
    {title: 'MascotVet | Home',path: 'home',component: HomeComponent},
    {title: 'MascotVet | Contact',path: 'contact',component: ContactComponent},
    {title: 'MascotVet | About',path: 'about',component: AboutComponent},
    {title: 'MascotVet | Login',path: 'login',component: LoginComponent},
];
