import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-international-txn-enabled-disabled',
  imports: [FormsModule, InputTextModule, ButtonModule,FloatLabelModule,CommonModule],
  templateUrl: './international-txn-enabled-disabled.component.html',
  styleUrl: './international-txn-enabled-disabled.component.scss'
})
export class InternationalTXNEnabledDisabledComponent {
CHNvalue:any
onSubmit(){
  
}
}
