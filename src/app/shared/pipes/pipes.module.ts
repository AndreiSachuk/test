import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdChangerByIndexPipe } from '@/app/shared/pipes/id-changer/id-changer-by-index.pipe';

@NgModule({
  declarations: [IdChangerByIndexPipe],
  imports: [CommonModule],
  exports: [IdChangerByIndexPipe],
})
export class PipesModule {}
