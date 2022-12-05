import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStep } from '../interfaces/step.interface';

const STEPS = [
  { stepNumber: 1 },
  { stepNumber: 2 },
  { stepNumber: 3 },
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<IStep[]> = new BehaviorSubject<IStep[]>(STEPS);
  currentStep$: BehaviorSubject<IStep | null> = new BehaviorSubject<IStep | null>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: IStep): void {
    this.currentStep$.next(step);
  }

  public getCurrentStep(): Observable<IStep> {
    return this.currentStep$.asObservable();
  }

  public getSteps(): Observable<IStep[]> {
    return this.steps$.asObservable();
  }

  public moveToNextStep(): void {
    const index = this.currentStep$.value.stepNumber;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  public moveToPrevStep(): void {
    const index = this.currentStep$.value.stepNumber - 2;

    if (index >= 0) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

}
