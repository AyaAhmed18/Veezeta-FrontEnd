import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  imports: [

    FormsModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    InputTextModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    CalendarModule,
    PaginatorModule,
    MultiSelectModule,
    TieredMenuModule,
    MenuModule,
    MenubarModule,
    BadgeModule
    
  ],
  exports: [

    FormsModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    InputTextModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    CalendarModule,
    PaginatorModule,
    MultiSelectModule,
    TieredMenuModule,
    MenuModule,
    MenubarModule,
    BadgeModule
  ],
})
export class PrimeModule{}
