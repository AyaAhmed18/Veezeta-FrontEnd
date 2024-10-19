
import { Component ,EventEmitter,OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { appointement } from '../../../models/appointement';
@Component({
  selector: 'app-creat-appointement',
  standalone: true,
  imports: [CommonModule, FormsModule,DialogModule,ButtonModule,],
  
  providers: [ConfirmationService, MessageService],
  templateUrl: './creat-appointement.component.html',
  styleUrl: './creat-appointement.component.css'
})
export class CreatAppointementComponent {
  @Output() appointementCreated = new EventEmitter<appointement>();
  visible: boolean = false;
  messages: Message[] = [];
  
  showDialog() 
  {
    this.visible = true;
  }

  // hideDialog()
  // {
  //   this.visible = false;
  // }
}
