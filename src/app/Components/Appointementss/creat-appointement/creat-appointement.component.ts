
// import { Component ,EventEmitter,OnInit, Output } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
// import { DialogModule } from 'primeng/dialog';
// import { NgIf } from '@angular/common';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Message } from 'primeng/api';
// import { ConfirmationService, MessageService } from 'primeng/api';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { appointement } from '../../../models/appointement';
// @Component({
//   selector: 'app-creat-appointement',
//   standalone: true,
//   imports: [CommonModule, FormsModule,DialogModule,ButtonModule,],
  
//   providers: [ConfirmationService, MessageService],
//   templateUrl: './creat-appointement.component.html',
//   styleUrl: './creat-appointement.component.css'
// })
// export class CreatAppointementComponent {
//   @Output() appointementCreated = new EventEmitter<appointement>();
//   visible: boolean = false;
//   messages: Message[] = [];
//   displayDialog: boolean = false;
//   showDialog() 
//   {
//     this.visible = true;
//   }


//   hideDialog() {
//     this.displayDialog = false;
//   }
  
// }

// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import { appointement } from '../../../models/appointement';
// import { CommonModule } from '@angular/common';
// import { DialogModule } from 'primeng/dialog';
// import { ButtonModule } from 'primeng/button';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-creat-appointement',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule, DialogModule, ButtonModule],
//   templateUrl: './creat-appointement.component.html',
//   styleUrls: ['./creat-appointement.component.css']
// })
// export class CreatAppointementComponent implements OnInit {
//   @Output() appointementCreated = new EventEmitter<appointement>();
//   visible: boolean = false;
//   createForm!: FormGroup;

//   ngOnInit(): void {
//     this.createForm = new FormGroup({
//       doctorName: new FormControl('', Validators.required),
//       patientName: new FormControl('', Validators.required),
//       time: new FormControl('', Validators.required),
//       status: new FormControl(false),
//       payment: new FormControl('')
//     });
//   }

//   showDialog() {
//     this.visible = true;
//   }

//   hideDialog() {
//     this.visible = false;
//   }

//   saveAppointment() {
//     if (this.createForm.valid) {
//       const newAppointment: appointement = {
//         id: 'temp-id', 
//         doctorName: this.createForm.value.doctorName,
//         patientName: this.createForm.value.patientName,
//         time: this.createForm.value.time,
//         status: this.createForm.value.status,
//         payment: this.createForm.value.payment,
//         doctorId: 0, 
//         patientId: 0,
//         entities: []
//       };
//       this.appointementCreated.emit(newAppointment);
//       this.hideDialog();
//     }
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointementService } from '../../../Service/appointement.service';
import { appointement } from '../../../models/appointement';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creat-appointement',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './creat-appointement.component.html',
  styleUrls: ['./creat-appointement.component.css']
})
export class CreatAppointementComponent {
  @Output() appointementCreated = new EventEmitter<appointement>();
  visible: boolean = false;
  createForm: FormGroup;

  constructor(
              private appointementService: AppointementService,
              private messageService: MessageService
            ) 
  {
      this.createForm = new FormGroup({
      doctorName: new FormControl('', Validators.required),
      patientName: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      status: new FormControl(false),
      payment: new FormControl('', Validators.required)
    });
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  onSubmit() {
    if (this.createForm.valid) 
      {
      const newAppointment = this.createForm.value;
      this.appointementService.createAppointment(newAppointment).subscribe({
        next: (response: appointement) => {
          this.appointementCreated.emit(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Appointment created successfully!' });
          this.hideDialog();
        },
        error: (error: any) => {
          console.error('Error creating appointment:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create appointment.' });
        }
      });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Validation Error', detail: 'Please fill all required fields.' });
    }
  }
}
