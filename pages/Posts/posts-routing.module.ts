import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: '', component: PostCreateComponent },
      { path: '/create', component: PostCreateComponent },
      // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      // { path: 'fee', loadChildren: () => import('./student-fee/student-fee.module').then(m => m.StudentFeeModule) },
      // { path: 'batch', loadChildren: () => import('./my-batch/my-batch.module').then(m => m.MyBatchModule) },
      // { path: 'attendence', loadChildren: () => import('./my-attendence/my-attendence.module').then(m => m.MyAttendenceModule) },
      // { path: 'test-series', loadChildren: () => import('./test-series/test-series.module').then(m => m.TestSeriesModule) },
      // { path: 'classtest', loadChildren: () => import('./class-test/class-test.module').then(m => m.ClassTestModule) },
      // { path: 'bookmark-questions', loadChildren: () => import('./bookmark-questions/bookmark-questions.module').then(m => m.BookmarkQuestionsModule) },
      // { path: 'video-course', loadChildren: () => import('./video-course/video-course.module').then(m => m.VideoCourseModule) },
      // { path: '', redirectTo: '/student/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
