import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/share/share.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    EducationComponent,
    ContactMeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
