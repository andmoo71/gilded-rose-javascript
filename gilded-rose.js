export { Item, items, AgedBrie, Sulfuras, BackstagePass, ConjuredItem };




class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
    this.sellIn -= 1;
  }
}

class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

class Sulfuras extends Item {
  updateQuality() {}
}

class BackstagePass extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality += 1;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality += 1;
      }
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

class ConjuredItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 2;
    }
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 2;
    }
  }
}

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new ConjuredItem("Conjured Mana Cake", 3, 6)
];
