import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined = ''; 
  game: Game;

  cards = [0, 1, 2, 3];

  constructor() {
    this.game = new Game()
  }

  // newGame() {
  //   this.game = new Game();
  //   console.log(this.game);
  // }

  takeCard() {
    if (!this.pickCardAnimation){
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
      
      console.log(this.game.stack);
      console.log(this.game.playedCards);
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard!);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }
}
