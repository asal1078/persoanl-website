import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { EducationComponent } from './pages/education/education.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-me',
    pathMatch: 'full',
  },
  {
    component: AboutMeComponent,
    path: 'about-me',
    data :{
      title:'About Me'
    }
  },
  {
    component: ProjectsComponent,
    path: 'projects',
    data :{
      title:'Projects'
    }
  },
  {
    component: EducationComponent,
    path: 'education',
    data :{
      title:'Education'
    }
  },
  {
    component: ContactMeComponent,
    path: 'contact-me',
    data :{
      title:'Contact Me'
    }
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
