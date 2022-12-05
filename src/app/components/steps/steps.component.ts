import { Component, OnInit } from '@angular/core';
import { IStep } from 'src/app/interfaces/step.interface';
import { StepsService } from 'src/app/services/steps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  steps$: Observable<IStep[]>;
  currentStep$: Observable<IStep>;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps$ = this.stepsService.getSteps();
    this.currentStep$ = this.stepsService.getCurrentStep();
  }

  public onStepClick(step: IStep): void {
    this.stepsService.setCurrentStep(step);
  }

}
