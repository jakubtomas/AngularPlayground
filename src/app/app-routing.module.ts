import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { Registration2Component } from './components/registration2/registration2.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegistrationbComponent } from './components/registrationb/registrationb.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration2', component: Registration2Component },
  { path: 'registrationb', component: RegistrationbComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:postId', component: PostComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
