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
@Component({
  selector: 'app-dashbordmain',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
    InputTextModule, IconFieldModule,InputIconModule,ChartModule],
providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './dashbordmain.component.html',
  styleUrl: './dashbordmain.component.css'
})
export class DashbordmainComponent implements OnInit {
  basicData: any;
  basicOptions: any;
    data: any;

    options: any;

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
      }
  
  }

