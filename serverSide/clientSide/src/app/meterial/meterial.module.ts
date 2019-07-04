import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


const modules = [ 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  //MAT_DIALOG_DATA 
 ]

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: []
})
export class MeterialModule { }


