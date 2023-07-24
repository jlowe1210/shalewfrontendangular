import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageModule } from './Pages/AboutPage/AboutPage.module';
import { ShareModule } from './share.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/HomePage/HomePage.component';
import { NavBarComponent } from './Components/UI-Navbar/NavBar.component';
import { HomePageModule } from './Pages/HomePage/HomePage.module';
import { AboutPageComponent } from './Pages/AboutPage/AboutPage.component';
import { ContactPageModule } from './Pages/ContactPage/ContactPage.module';
import { ContactPageCompononet } from './Pages/ContactPage/ContacPage.component';

import { Page404Component } from './Pages/404Page/404Page.component';
import { PhotoGalleryPageComponent } from './Pages/PhotoGalleryPage/PhotoGalleryPage.component';
import { PhotoGalleryPageModule } from './Pages/PhotoGalleryPage/PhotoGalleryPage.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageCompononet },
  { path: '404', component: Page404Component },
  { path: ':gallery', component: PhotoGalleryPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, Page404Component],
  imports: [
    RouterModule.forRoot(routes),
    ShareModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    PhotoGalleryPageModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
