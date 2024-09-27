import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from './shared-module.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import {ReactiveFormsModule} from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';

@NgModule({
  exports: [
    InputTextModule,
    InputIconModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    TabViewModule,
    ImageModule,
    PasswordModule,
    TableModule,
    ReactiveFormsModule,
    IconFieldModule,
    TagModule
  ]
})
export class SharedModuleModule { }
