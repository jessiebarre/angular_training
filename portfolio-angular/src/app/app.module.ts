import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {NgxHmCarouselModule} from "ngx-hm-carousel";
import { EmbedVideo} from "ngx-embed-video/dist";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { HistoireComponent } from './components/parcours/modal/histoire/histoire.component';
import { PedagogieComponent } from './components/parcours/modal/pedagogie/pedagogie.component';
import { CommunicationComponent } from './components/parcours/modal/communication/communication.component';
import { DeveloppementComponent } from './components/parcours/modal/developpement/developpement.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { CarouselComponent } from './components/projets/carousel/carousel.component';
import { FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    SidenavListComponent,
    ExtrasComponent,
    ParcoursComponent,
    HistoireComponent,
    PedagogieComponent,
    CommunicationComponent,
    DeveloppementComponent,
    ProjetsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    NgxHmCarouselModule,
    FormsModule,
    MatCardModule,
    EmbedVideo,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    HistoireComponent,
    PedagogieComponent,
    CommunicationComponent,
    DeveloppementComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
