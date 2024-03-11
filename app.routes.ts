import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PostCreateComponent } from './pages/Posts/post-create/post-create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    // { path: 'post', component: PostCreateComponent },
    {
        path: 'post',
        loadChildren: () =>
            import('./pages/Posts/posts.module').then((m) => m.PostsModule),
    },
    // {
    //     path: 'student',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     loadChildren: () =>
    //         import('./pages/student-zone/student-zone.module').then((m) => m.StudentZoneModule),
    // },
];
