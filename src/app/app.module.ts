import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ObservableComponent } from './pages/observable/observable.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { MatTableModule } from '@angular/material/table';
import { CreationOperatorsPageComponent } from './pages/creation-operators-page/creation-operators-page.component';
import { FilteringOperatorsPageComponent } from './pages/filtering-operators-page/filtering-operators-page.component';
import { MatInputModule } from '@angular/material/input';
import { CombinationOperatorsPageComponent } from './pages/combination-operators-page/combination-operators-page.component';
import { TransformationOperatorsPageComponent } from './pages/transformation-operators-page/transformation-operators-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectPageComponent,
    CreationOperatorsPageComponent,
    FilteringOperatorsPageComponent,
    CombinationOperatorsPageComponent,
    TransformationOperatorsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}