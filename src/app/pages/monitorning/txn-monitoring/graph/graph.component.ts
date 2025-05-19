import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { isPlatformBrowser } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-graph',
  imports: [ChartModule, ButtonModule, InputTextModule,DatePickerModule ,
    CalendarModule, SelectModule, ReactiveFormsModule, FormsModule, NgIf, SplitButtonModule, ToastModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {
  items: MenuItem[] | undefined;
  label1: boolean = false;
  tex: boolean = true;
  value = 23;
  data: any;
  options: any;
  barChartData: any;
  barChartOptions: any;
  pieChartData: any;
  pieChartOptions: any;
  lineChartData: any;
  lineChartOptions: any;
  cities: City[] | undefined;
  formGroup: FormGroup | any;
  date2: Date | undefined;
  constructor() {
    this.items = [
      {
        label: 'Update',
        command: () => {
        }
      },
      {
        label: 'Delete',
        command: () => {
        }
      },
      { label: 'Angular Website', },
      { separator: true },
      { label: 'Upload', }
    ];
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
    });
    this.initChart();
    this.initTransTypeWise();
    this.responceChart();
    this.TransactionStatusChart()
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Success',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
          tension: 0.4
        },
        {
          label: 'Fail',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          tension: 0.4
        }
      ]
    };

    this.options = {
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
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
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
  }

  // -----------------------TransTypeWise-------------------------------

  initTransTypeWise(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Success',
          backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
          borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Fail',
          backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.barChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            color: textColorSecondary,
            font: {
              weight: '500'
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
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
  }
  // -----------------------ResponseWise---------------------------

  responceChart(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    const colors = {
      a: documentStyle.getPropertyValue('--p-cyan-500'),
      b: documentStyle.getPropertyValue('--p-orange-500'),
      c: documentStyle.getPropertyValue('--p-gray-500'),
    };

    const hoverColors = {
      a: documentStyle.getPropertyValue('--p-cyan-400'),
      b: documentStyle.getPropertyValue('--p-orange-400'),
      c: documentStyle.getPropertyValue('--p-gray-400'),
    };

    this.pieChartData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [colors.a, colors.b, colors.c],
          hoverBackgroundColor: [hoverColors.a, hoverColors.b, hoverColors.c]
        }
      ]
    };

    this.pieChartOptions = {
      plugins: {

        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const label = context.label || '';
              const value = context.parsed || 0;
              return `${label}: ${value} units`;
            }
          }
        }

      }
    };
  }
  // ------------------------
  TransactionStatusChart(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--p-cyan-500')
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--p-orange-500')
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          tension: 0.4,
          backgroundColor: 'rgba(107, 114, 128, 0.2)'
        }
      ]
    };

    this.lineChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const label = context.dataset.label || '';
              const value = context.parsed.y || 0;
              return `${label}: ${value}`;
            }
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
  }
  show(): void {
    this.label1 = !this.label1
    this.tex = !this.tex
  }

  splitButtonItems = [
    {
      label: 'Refresh',
      icon: 'pi pi-refresh',
      command: () => {
        this.refreshChart();
      }
    },
    {
      label: 'Export',
      icon: 'pi pi-download',
      command: () => {
        this.exportData();
      }
    }
  ];

  // Sample methods
  refreshChart() {
    console.log('Refreshing chart...');
    // Your refresh logic here
  }

  exportData() {
    console.log('Exporting data...');
    // Your export logic here
  }

}
