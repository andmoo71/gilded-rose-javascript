import { expect, describe, it, suite } from "vitest";
import { Item, items, AgedBrie, Sulfuras, BackstagePass, ConjuredItem } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality Brie", () => {
  it("Brie too many...", () => {
    const brie = new AgedBrie("Brie Cheese", 15, 15);
    items.push(brie);
    
    brie.updateQuality();
    
    expect(brie.quality).toBe(16);
    expect(brie.sellIn).toBe(15);
  })
})

describe("updateQuality glove", () =>{
  it("Is never sold and does not decrease in quality", () => {
    const handOfRagnos = new Sulfuras("Gauntlets", 50, 50)
    items.push(handOfRagnos);

    handOfRagnos.updateQuality();

    expect(handOfRagnos.quality).toBe(50);
    expect(handOfRagnos.sellIn).toBe(50);
  })
})

describe("updateQuality ticket", () => {
  it("increases in quality as sellin decreases", () => {
    const tix = new BackstagePass("tickets", 10, 10);
    items.push(tix);

    tix.updateQuality();

    expect(tix.quality).toBe(12);
    expect(tix.sellIn).toBe(10);
  })
})

describe("updateQuality conjured", () => {
  it("Conjured items degrade twice as fast as normal items", () => {
    const conjured = new ConjuredItem("Conjured Item", 20, 20);
    items.push(conjured);

    conjured.updateQuality();

    expect(conjured.quality).toBe(18);
    expect(conjured.sellIn).toBe(20);
  })
})