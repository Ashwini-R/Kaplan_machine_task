import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material';
import { BookListComponent } from "./pages/book-list/book-list.component";
import { AddBookDialog } from "./pages/book-list/book-list.component";
import { KaplanServiceService } from "./providers/kaplan-service.service";
import { BooksTileComponent } from './components/books-tile/books-tile.component';
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [AppComponent, BookListComponent,
    AddBookDialog,
    BooksTileComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [KaplanServiceService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    AddBookDialog
  ],

})
export class AppModule {

}
