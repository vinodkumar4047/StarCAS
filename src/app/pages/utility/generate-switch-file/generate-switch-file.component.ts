import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-generate-switch-file',
  imports: [CommonModule,FormsModule,DatePickerModule,FloatLabel],
  templateUrl: './generate-switch-file.component.html',
  styleUrl: './generate-switch-file.component.scss'
})
export class GenerateSwitchFileComponent {

}
