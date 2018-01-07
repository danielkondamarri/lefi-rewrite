import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChristisvictorComponent } from './christisvictor/christisvictor.component';
import { VideoandaudioComponent } from './videoandaudio/videoandaudio.component';
import { LiteratureComponent } from './literature/literature.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppleComponent } from './apple/apple.component';
import { LanguageComponent } from './language/language.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ChristisvictorComponent,
    VideoandaudioComponent,
    LiteratureComponent,
    ContactComponent,
    HomeComponent,
    AppleComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      {
        path:'choose-your-language',
        component: LanguageComponent
      },
      {
        path: '',
        component: AppleComponent

      },
      {
        path:'mac',
        component: AboutusComponent
      },
      {
        path:'ipad',
        component: ChristisvictorComponent
      },
      {
        path:'iphone',
        component: VideoandaudioComponent
      },
      {
        path:'watch',
        component: LiteratureComponent
      },
      {
        path:'tv',
        component: ContactComponent
      },
      {
        path:'music',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
