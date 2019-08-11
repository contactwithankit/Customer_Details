import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http'; 

//
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  exports: [
   
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
