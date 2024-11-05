import { Component, OnInit ,ViewChild} from '@angular/core';
import{IPatients} from '../../models/IPatients'
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../Service/patient.service';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import{PrimeModule} from '../../prime.module'
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ChartModule } from 'primeng/chart';
import { MeterGroupModule } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { AppointementService } from '../../Service/appointement.service';
@Component({
  selector: 'app-dashbordmain',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule,CarouselModule, 
    InputTextModule, IconFieldModule,InputIconModule,ChartModule,CardModule],
providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './dashbordmain.component.html',
  styleUrl: './dashbordmain.component.css'
})
export class DashbordmainComponent implements OnInit {
  basicData: any;
  basicOptions: any;
    data: any;
    options: any;
    data3: any;
    options3: any;
    appointmentData: any;
   chartOptions: any;

   constructor(private appointementService: AppointementService) {}

  ngOnInit()
   {
    // first
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
              {
                  label: 'Sales',
                  data: [540, 325, 702, 620],
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
      // secound
  
          const documentStyle2= getComputedStyle(document.documentElement);
          const textColor2 = documentStyle2.getPropertyValue('--text-color');
  
          this.data = {
              labels: ['A', 'B', 'C'],
              datasets: [
                  {
                      data: [540, 325, 702],
                      backgroundColor: [documentStyle2.getPropertyValue('--blue-500'), documentStyle2.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                      hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                  }
              ]
          };
  
          this.options = {
              plugins: {
                  legend: {
                      labels: {
                          usePointStyle: true,
                          color: textColor2
                      }
                  }
              }
          };

          //thride
          const documentStyle3 = getComputedStyle(document.documentElement);
          const textColor3 = documentStyle.getPropertyValue('--text-color');
          const textColorSecondary3 = documentStyle.getPropertyValue('--text-color-secondary');
          const surfaceBorder3 = documentStyle.getPropertyValue('--surface-border');
          
          this.data3 = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      type: 'line',
                      label: 'Dataset 1',
                      borderColor: documentStyle.getPropertyValue('--blue-500'),
                      borderWidth: 2,
                      fill: false,
                      tension: 0.4,
                      data: [50, 25, 12, 48, 56, 76, 42]
                  },
                  {
                      type: 'bar',
                      label: 'Dataset 2',
                      backgroundColor: documentStyle.getPropertyValue('--green-500'),
                      data: [21, 84, 24, 75, 37, 65, 34],
                      borderColor: 'white',
                      borderWidth: 2
                  },
                  {
                      type: 'bar',
                      label: 'Dataset 3',
                      backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                      data: [41, 52, 24, 74, 23, 21, 32]
                  }
              ]
          };
          
          this.options3 = {
              maintainAspectRatio: false,
              aspectRatio: 0.6,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder
                      }
                  },
                  y: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder
                      }
                  }
              }
          };
          //new
          this.getAppointmentsByYear();
          this.setupChartOptions();
 }
  
  
 getAppointmentsByYear()
  {
    this.appointementService.getAllAppointments(20,1).subscribe((response) => {
      const yearCounts: { [key: string]: number } = {};
      response.entities.forEach((appointment: any) => {
        const year = new Date(appointment.time).getFullYear();
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      });

      const labels = Object.keys(yearCounts);
      const values = Object.values(yearCounts);

      this.appointmentData = {
        labels: labels,
        datasets: [
          {
            label: 'Number of Appointments',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: values
          }
        ,
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#e0932d',
            data: values,
            borderColor: 'white',
            borderWidth: 1
        },
        ]
      };
    });
  }

  setupChartOptions() {
    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Appointments'
          },
          beginAtZero: true
        }
      }
    };
  }
  }

