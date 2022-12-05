import { Component } from '@angular/core';
import { IStep } from './interfaces/step.interface';
import { Observable } from 'rxjs';
import { StepsService } from './services/steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentStep: Observable<IStep>;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
    console.log('%capp.component.ts line:18 currentStep', 'color: #007acc;', this.currentStep);
  }
}
