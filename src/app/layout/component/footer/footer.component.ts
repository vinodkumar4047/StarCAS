import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {

}
