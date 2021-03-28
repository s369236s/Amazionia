import { Item } from "./Item";
import { ItemBox } from "./ItemBox";
export const ItemID = {
  food: {
    banana: 1,
    coconut: 2,
    berry: 3,
    fish: 4,
  },
  tool: {
    passport: 101,
  },
};

export class Items {
  items: Item[] = [];
  constructor() {
    this.items.push(
      new Item(
        "Banana",
        "./Media/Image/Items/Banana.png",
        ItemID.food.banana,
        "A Banana",
        true,
        [0, 10, 5, 0]
      )
    );
    this.items.push(
      new Item(
        "Coconut",
        "./Media/Image/Items/Coconut.png",
        ItemID.food.coconut,
        "A Coconut",
        true,
        [0, 10, 20, 0]
      )
    );
    this.items.push(
      new Item(
        "Berry",
        "./Media/Image/Items/Berry.png",
        ItemID.food.berry,
        "A Berry",
        true,
        [0, 5, 5, 0]
      )
    );
    this.items.push(
      new Item(
        "Fish",
        "./Media/Image/Items/Fish.png",
        ItemID.food.fish,
        "A Fish",
        true,
        [0, 5, 5, 0]
      )
    );
    this.items.push(
      new Item(
        "Passport",
        "./Media/Image/Items/Passport.png",
        ItemID.tool.passport,
        "My Passport",
        false,
        undefined,
        1
      )
    );
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
