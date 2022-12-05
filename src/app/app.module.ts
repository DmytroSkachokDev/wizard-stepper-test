import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    ContentComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
