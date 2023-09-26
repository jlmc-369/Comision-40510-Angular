import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
