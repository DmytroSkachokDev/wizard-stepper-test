import { Component } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  currentStep$: Observable<number> = this.stepsService.getCurrentStep().pipe(
    map((step) => step.stepNumber)
  );

  constructor(private stepsService: StepsService) { }

}
