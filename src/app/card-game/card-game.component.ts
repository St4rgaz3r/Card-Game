import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { CardGameGeneratorService } from './card-game-generator.service';

@Component({
     selector: 'app-card-game',
     templateUrl: './card-game.component.html',
     styleUrls: ['./card-game.component.scss']
})

export class CardGameComponent implements OnInit {
     constructor(private cardGameGeneratorService: CardGameGeneratorService) {}

     cardDeck = Array(52);
     isShuffled: boolean = false;

     getCardDeck(): void {
          this.cardDeck = this.cardGameGeneratorService.generateCardDeck();
     }

     public shuffleCardDeck() {
          document.querySelector('.card-deck-block').classList.add('anim-shuffle');

          setTimeout(() => {
               document.querySelector('.card-deck-block').classList.remove('anim-shuffle');
          }, 1800);

          setTimeout(() => {
               for (let i = 0; i < this.cardDeck.length; i++) {
                    var randomize = Math.random() * i | 0;
                    var curIteration = this.cardDeck[i];

                    this.cardDeck[i] = this.cardDeck[randomize];
                    this.cardDeck[randomize] = curIteration;
               }

               this.isShuffled = true;

               return this.cardDeck;
          }, 3200);
     }

     public sortingCards(){
          if (this.isShuffled == true) {
               var sortedArray = this.cardDeck.slice(0, 10);

               sortedArray.sort((x, y) => x.cardHierarchy - y.cardHierarchy);

               for (let i = 0; i < 10; i++) {
                    this.cardDeck[i] = sortedArray[i];
               }

          } else {
               alert('You need to shuffle your deck at least one time before sorting your cards!');
          }
     }

     ngOnInit() {
          this.getCardDeck();
     }
}
