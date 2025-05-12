import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-international-txn-enabled-disabled',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './international-txn-enabled-disabled.component.html',
  styleUrl: './international-txn-enabled-disabled.component.scss'
})
export class InternationalTXNEnabledDisabledComponent {

}
