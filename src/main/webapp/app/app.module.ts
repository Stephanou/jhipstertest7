import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipstertest7SharedModule } from 'app/shared/shared.module';
import { Jhipstertest7CoreModule } from 'app/core/core.module';
import { Jhipstertest7AppRoutingModule } from './app-routing.module';
import { Jhipstertest7HomeModule } from './home/home.module';
import { Jhipstertest7EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipstertest7SharedModule,
    Jhipstertest7CoreModule,
    Jhipstertest7HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipstertest7EntityModule,
    Jhipstertest7AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipstertest7AppModule {}
