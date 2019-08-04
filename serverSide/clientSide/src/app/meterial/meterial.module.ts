import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDialog, MAT_DIALOG_DATA, MatIconModule, MatTableModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


const modules = [ 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatDialog,
MAT_DIALOG_DATA ,
MatIconModule,
 
MatTableModule
 ]

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: []
})
export class MeterialModule { }


