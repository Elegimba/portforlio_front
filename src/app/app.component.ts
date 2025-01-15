import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { StoryComponent } from "./components/story/story.component";
import { ProyectsComponent } from "./components/proyects/proyects.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, StoryComponent, ProyectsComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_front';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  
}
