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
  currentCard: string = '';
  game: Game;

  cards = [0, 1, 2, 3];

  constructor() {
    this.game = new Game();
  }

  // newGame() {
  //   this.game = new Game();
  //   console.log(this.game);
  // }

  takeCard() {
    if (!this.pickCardAnimation) {
      if (this.game.stack.length > 0) {
        this.currentCard = this.game.stack.pop()!;
      }
      this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);
      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    }
  }
}
