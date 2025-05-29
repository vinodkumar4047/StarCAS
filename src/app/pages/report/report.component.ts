import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report',
  imports: [SelectButtonModule,CommonModule,FormsModule,AccordionModule,ButtonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
stateOptions: any[] = [{ label: 'ATM Reports', value: '0' }, { label: 'Transaction Reports', value: '1' }];
value: string = '0';

constructor(private router: Router){}

reportNavigate(type:any){
  this.router.navigate(['/pages/report-generation'], { state: { type: type } });
}
 
}
