import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@/app/components/table/table.component';
import { PipesModule } from '@/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, PipesModule],
  exports: [TableComponent],
})
export class TableModule {}
