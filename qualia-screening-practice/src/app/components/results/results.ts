import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionService, Score} from '../../services/question';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class ResultsComponent implements OnInit {
  score: Score | undefined;
  totalQuestions: number = 0;
  @Output() restart = new EventEmitter<void>();

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.score = this.questionService.getScore();
    this.totalQuestions = this.questionService.getTotalQuestions();
  }

  onRestart(): void {
    this.restart.emit();
  }
}
