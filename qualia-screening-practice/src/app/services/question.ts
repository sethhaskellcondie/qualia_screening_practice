import { Injectable } from '@angular/core';

export interface Question {
  text: string;
  answers: string[];
  correctAnswer: string;
}

export interface Score {
  correct: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions: Question[] = [
    {
      text: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      text: 'Which planet is known as the Red Planet?',
      answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      text: 'What is the largest ocean on Earth?',
      answers: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correctAnswer: 'Pacific'
    },
    {
      text: 'How many sides does a hexagon have?',
      answers: ['5', '6', '7', '8'],
      correctAnswer: '6'
    },
    {
      text: 'What gas do plants absorb from the atmosphere?',
      answers: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide'
    }
  ];

  private score: Score = { correct: 0, total: 0 };
  private currentIndex: number = 0;

  getQuestions(): Question[] {
    return this.questions;
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getScore(): Score {
    return this.score;
  }

  submitAnswer(answer: string): void {
    this.score.total++;
    if (answer === this.questions[this.currentIndex].correctAnswer) {
      this.score.correct++;
    }
  }

  nextQuestion(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  isQuizComplete(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  reset(): void {
    this.currentIndex = 0;
    this.score = { correct: 0, total: 0 };
  }
}
