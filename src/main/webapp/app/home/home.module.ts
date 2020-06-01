import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipstertest7SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipstertest7SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipstertest7HomeModule {}
