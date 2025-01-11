import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  faWhatsapp = faWhatsappSquare;
  faEnvelopeSquare = faEnvelopeSquare;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
