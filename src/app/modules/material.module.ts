import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  exports: [
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
