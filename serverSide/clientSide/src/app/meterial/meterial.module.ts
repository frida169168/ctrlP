import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDialog, MAT_DIALOG_DATA, MatPaginatorModule, MatListModule, MatTableModule, MatIcon, MatIconModule, MatButtonToggleModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


const modules = [ 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatDialog,
  MatPaginatorModule,
  MAT_DIALOG_DATA,
  MatListModule,
  MatTableModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonToggleModule  
 ]

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: []
})
export class MeterialModule { }


