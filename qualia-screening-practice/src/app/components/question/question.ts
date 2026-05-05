import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Question, QuestionService, Score} from '../../services/question';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.scss',
})
export class QuestionComponent implements OnInit {
  currentQuestion: Question | null = null;
  currentIndex: number = 0;
  totalQuestions: number = 0;
  currentAnswers: string[] = [];
  selectedAnswer: string | undefined = undefined;
  score: Score | undefined = undefined;
  isLastQuestion: boolean = false;
  @Output() quizComplete = new EventEmitter<void>();

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.currentQuestion = this.questionService.getCurrentQuestion();
    this.currentIndex = this.questionService.getCurrentIndex();
    this.totalQuestions = this.questionService.getTotalQuestions();
    this.currentAnswers = this.currentQuestion.answers;
    this.isLastQuestion = this.questionService.isLastQuestion();
  }

  selectAnswer(answer: string): void {
    if (this.selectedAnswer) {
      return;
    }
    this.selectedAnswer = answer;
    this.questionService.submitAnswer(answer);
    this.score = this.questionService.getScore();
  }

  isCorrect(answer: string): boolean {
    return answer === this.currentQuestion?.correctAnswer;
  }

  isWrong(answer: string): boolean {
    return answer === this.selectedAnswer && !this.isCorrect(answer);
  }

  nextQuestion(): void {
    if (this.isLastQuestion) {
      this.quizComplete.emit();
      return;
    }
    this.questionService.nextQuestion();
    this.currentQuestion = this.questionService.getCurrentQuestion();
    this.currentIndex = this.questionService.getCurrentIndex();
    this.currentAnswers = this.currentQuestion.answers;
    this.isLastQuestion = this.questionService.isLastQuestion();
    this.selectedAnswer = undefined;
    this.score = undefined;
  }
}
