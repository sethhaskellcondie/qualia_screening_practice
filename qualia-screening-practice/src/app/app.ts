import { Component, signal } from '@angular/core';
import {QuestionComponent} from './components/question/question';
import {QuestionService} from './services/question';
import {ResultsComponent} from './components/results/results';

@Component({
  selector: 'app-root',
  imports: [
    QuestionComponent,
    ResultsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  quizComplete: boolean = false;

  constructor(private questionService: QuestionService) {}

  onQuizComplete(): void {
    this.quizComplete = true;
  }

  onRestart(): void {
    this.quizComplete = false;
    this.questionService.reset();
  }
}
