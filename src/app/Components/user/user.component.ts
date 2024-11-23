
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    ConfirmDialogModule,
    TieredMenuModule,
    CarouselModule,
    TagModule,ButtonModule,
    ImageModule,
  ],
  providers: [ConfirmationService, ConfirmPopupModule, MessageService, PrimeIcons,],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 
})
export class UserComponent implements OnInit 
{
  sliders: any[] = [];
  activeTab: string = 'title'; 
  items: MenuItem[] | undefined;
  products: any[] = [];
  responsiveOptions: any[] | undefined;
  setActiveTab(tab: string) {
    this.activeTab = tab; // toggle the active tab
  }
  ngOnInit(): void 
  {
    //slider image
   
    this.sliders = [
      { backdrop_path: 'https://i.pinimg.com/564x/09/66/6b/09666bee796623e5e130d54d040b5b62.jpg' },
      { backdrop_path: 'https://i.pinimg.com/474x/10/f8/a0/10f8a095a10e823bbe3c9944e76c7b90.jpg' },
      { backdrop_path: 'https://i.pinimg.com/474x/01/ad/30/01ad30b9d65dc657a8ab40f99d0a8caa.jpg' },
      { backdrop_path: 'https://i.pinimg.com/474x/42/30/c4/4230c400fa358198f5f5e9dbeeee4e9a.jpg' }
    ];
    //drop down data
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-file',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-plus',
                  items: [
                      {
                          label: 'Document',
                          icon: 'pi pi-file'
                      },
                      {
                          label: 'Image',
                          icon: 'pi pi-image'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-video'
                      }
                  ]
              },
              {
                  label: 'Open',
                  icon: 'pi pi-folder-open'
              },
              {
                  label: 'Print',
                  icon: 'pi pi-print'
              }
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-file-edit',
          items: [
              {
                  label: 'Copy',
                  icon: 'pi pi-copy'
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-times'
              }
          ]
      },
      {
          label: 'Search',
          icon: 'pi pi-search'
      },
      {
          separator: true
      },
      {
          label: 'Share',
          icon: 'pi pi-share-alt',
          items: [
              {
                  label: 'Slack',
                  icon: 'pi pi-slack'
              },
              {
                  label: 'Whatsapp',
                  icon: 'pi pi-whatsapp'
              }
          ]
      }
  ]

    // cursole
    // Static product data
    this.products = [
        {
          name: 'Facial Cleansing',
          price: '50.00',
          offernumber:40,
          discount:20,
          image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/facial_cleansing/desktop.webp'
          
        },
        {
          name: 'Teeth Cleaning',
          price: '30.00',
          offernumber:40,
          discount:10,
          image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/teeth_cleaning/desktop.webp'
        },
        {
          name: 'Hair Care Treatment',
          price: '75.00',
          offernumber:40,
          discount:30,
          image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/face_peeling/desktop.webp' 
        },
        {
          name: 'Body Massage',
          price: '100.00',
          offernumber:40,
          discount:33,
          image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/metal_braces/desktop.webp' 
        },
        {
            name: 'any thing',
            price: '90.00',
            offernumber:40,
            discount:15,
            image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/vision_correction/desktop.webp'
          },
          {
            name: 'Teeth Cleaning',
            price: '30.00',
            offernumber:40,
            discount:10,
            image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/60569/_next/static/images/offers/teeth_cleaning/desktop.webp'
          },
      ];
  
      // Responsive options for the carousel
      this.responsiveOptions = [
        {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ];
    }


  
}

 
  


