
const { Shop, Item } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("+5 Dexterity Vest", -1, 0),
  new Item("+5 Dexterity Vest", -1, 10),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Elixir of the Mongoose", -1, 10),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", -1, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
  new Item("Conjured Mana Cake", -1, 6),
  new Item("Conjured Mana Cake", -1, 0),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
