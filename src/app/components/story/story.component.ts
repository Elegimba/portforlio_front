import { Component, inject } from '@angular/core';
import { IForm } from '../../interfaces/iform.interface';
import { IExp } from '../../interfaces/iexp.interface';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  
  arrForm: IForm[] = [];
  arrExp: IExp[] = [];

  storyService = inject(StoryService);

  async ngOnInit() {
    try {
      this.arrForm = await this.storyService.getAllForm();
      this.arrExp = await this.storyService.getAllExp();
      console.log(this.arrForm);
      console.log(this.arrExp);
    } catch (error) {
      console.log(error);
    }
  }

}
