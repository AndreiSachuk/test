import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '@/app/pages/main-page/main-page.component';
import { HeaderModule } from '@/app/components/header/header.module';
import { TableModule } from '@/app/components/table/table.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, HeaderModule, TableModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
