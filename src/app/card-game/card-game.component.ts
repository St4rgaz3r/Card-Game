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
     sortedArray = Array(10)
     ranksArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
     cardColorsArray = ['♦︎','♥︎','♠︎','♣︎'];
     isShuffled: boolean = false;
     isSorted: boolean = false;

     getCardDeck(): void {
          this.cardDeck = this.cardGameGeneratorService.generateCardDeck();
          this.colorAndNumberSort();
     }

     public colorAndNumberSort() {
          this.randomArray(this.ranksArray);
          this.randomArray(this.cardColorsArray);

          for (let i = 0; i < this.cardDeck.length; i++) {
               var cardColor = i / 13 | 0;
               var rank = i % 13;

               this.cardDeck[i].cardColor = this.cardColorsArray[cardColor];
               this.cardDeck[i].value = this.ranksArray[rank];
               this.cardDeck[i].cardHierarchy = i;
          }

          this.isShuffled = false;
          this.isSorted = false;
     }

     public randomArray(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          while (0 !== currentIndex) {
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;

               temporaryValue = array[currentIndex];
               array[currentIndex] = array[randomIndex];
               array[randomIndex] = temporaryValue;
          }
          return array;
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

          this.isSorted = false;
     }

     public sortingCards(){
          if (this.isShuffled == true) {
               this.sortedArray = this.cardDeck.slice(0, 10);

               this.sortedArray.sort((x, y) => x.cardHierarchy - y.cardHierarchy);

               this.isSorted = true;

          } else {
               alert('You need to shuffle your deck at least one time before sorting your cards!');
          }
     }

     ngOnInit() {
          this.getCardDeck();
     }
}
