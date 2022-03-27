class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let salesPrice = this.items[i].quality;
      let soManyDaysToSell = this.items[i].sellIn;
      let isConcertTicket = this.items[i].name.includes("TAFKAL80ETC concert");
      let isAgedBrie = this.items[i].name.includes("Aged");
      let isExilir = this.items[i].name.includes("Elixir");
      let isConjured = this.items[i].name.includes("Conjured");
      let isVest = this.items[i].name.includes("Dexterity Vest");
      let isSulfuras = this.items[i].name.includes("Hand of Ragnaros");
      this.items[i].quality =
      isConcertTicket && soManyDaysToSell > 10 ? salesPrice
        : isConcertTicket && soManyDaysToSell <= 10 && soManyDaysToSell > 5 ? salesPrice + 2
        : isConcertTicket && soManyDaysToSell >= 0 ? salesPrice + 3
        : isConcertTicket && soManyDaysToSell < 0 ? salesPrice * 0
        : this.items[i].quality;
 


      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
