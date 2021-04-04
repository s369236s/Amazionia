import { Item } from "./Item";
import { ItemList } from "./ItemList";

export const ItemID = {
  food: {
    banana: 1,
    coconut: 2,
    berry: 3,
    fish: 4,
    spider: 11,
    snail: 12,
    freshWater: 41,
  },
  cooked_Food: {
    fish_Cooked: 51,
    spider_Cooked: 61,
    snail_Cooked: 62,
  },
  material: {
    stick: 101,
    rock: 102,
  },
  tool: {
    passport: 151,
    spear: 161,
    axe: 162,
  },
  nothing: {
    nothing: 999,
  },
};

export class Items {
  items: Item[] = [];
  itemList: ItemList;
  constructor() {
    this.itemList = new ItemList();
    for (const i in this.itemList.items) {
      this.items.push(this.itemList.items[i]);
    }
    // this.Debug();
  }
  findOne(itemID: number) {
    const found = this.items.find((item) => item.ID === itemID) as Item;
    return found;
  }
  Debug() {
    const found = this.items.find((item) => item.name === "Passport");
    console.table(this.items);
    console.table(found);
  }
}
