import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IStep } from 'src/app/interfaces/step.interface';
import { StepsService } from 'src/app/services/steps.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentStep$: Observable<number> = this.stepsService.getCurrentStep().pipe(
    map((step) => step.stepNumber)
  );

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
  }

  // onCompleteStep() {
  //   this.step.isComplete = true;
  // }

}
