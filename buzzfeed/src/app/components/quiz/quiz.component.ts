import { Component } from '@angular/core';
import quiz_qustions from '../../../../public/assets/data/quiz_questions.json'
import { Question, QuizQuestions } from '../../models/quiz-questions.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  title: string = "";
  quizQuestions!: QuizQuestions;
  questionSelected!: Question;
  answers: string[] = [];
  answerSelected: string = "";
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;
  showResult: boolean = false;

  constructor(private router: Router) {
    this.initializeValues();
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  initializeValues(){
    this.finished = false;
    this.showResult = false;
    this.questionIndex = 0;
    this.title = quiz_qustions.title;
    this.quizQuestions = quiz_qustions;
    this.questionSelected = this.quizQuestions.questions[this.questionIndex];
    this.questionMaxIndex = this.quizQuestions.questions.length;
  }

  playerChoice(alias: string): void{
    this.answers.push(alias);
    this.nextQuestion();
  }

  async nextQuestion(){
    this.questionIndex += 1;

    if(this.questionIndex >= this.questionMaxIndex){
      const result: string = await this.checkResult(this.answers);
      this.finished = true;
      //diz que o index usado eh do mesmo tipo das chaves dos results
      this.answerSelected = quiz_qustions.results[result as keyof typeof quiz_qustions.results];
      return
    }

    this.questionSelected = this.quizQuestions.questions[this.questionIndex];
  }

  async checkResult(answers: string[]): Promise<string>{
    const result = answers.reduce((previous, current, i, arr) => {
      //pergunta se a quantidade de itens anteriores eh maior que a quantidade dos items atuais
      if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length)
        return previous;

      return current;
    })

    return result;
  }

  refreshComponent(){
    this.initializeValues();
  }
}