import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../_module/Material.Module';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MaterialModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
