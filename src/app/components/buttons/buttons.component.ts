import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IStep } from 'src/app/interfaces/step.interface';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit {

  currentStep: Observable<IStep>;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  previousStep() {
    this.stepsService.moveToPrevStep();
  }

  nextStep() {
    this.stepsService.moveToNextStep();
  }
}
