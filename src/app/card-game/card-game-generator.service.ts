import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardGameGeneratorService {
     constructor() {}

     cardDeck = new Array(52);

     public generateCardDeck() {
          for (let i = 0; i < this.cardDeck.length; i++) {
               let getRank = (i) => i % 13;
               let getValue = (i) => getRank(i) + 1;
               let getSuit = (i) => i / 13 | 0;

               this.cardDeck[i] = i;
          }

          return this.cardDeck.map(this.getProperties);
     }

     getProperties(i) {
          var rank = i % 13;
          var value = rank + 1;
          var cardColor = i / 13 | 0;
          var cardHierarchy = i;

          return { cardColor, value, rank, cardHierarchy };
     }
}
