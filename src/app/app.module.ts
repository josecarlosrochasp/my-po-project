import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProFieldsModule, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule, PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProtheusLibCoreModule,
    ProFieldsModule,
    FormsModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
