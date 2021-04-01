import { Item } from "./Item";
import { ItemID } from "./Items";

interface ItemsNode {
  items: Item[];
}

class Raw_Food_Items implements ItemsNode {
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
        "Spider",
        "./Media/Image/Items/spider.png",
        ItemID.food.spider,
        "Look gross...",
        true,
        [5, 5, 0, -20],
        10
      )
    );
    this.items.push(
      new Item(
        "Snail",
        "./Media/Image/Items/snail.png",
        ItemID.food.snail,
        "Feel sticky",
        true,
        [0, 0, 0, -5],
        10
      )
    );
  }
}

class Cooked_Food_Items implements ItemsNode {
  items: Item[] = [];
  constructor() {
    this.items.push(
      new Item(
        "Cooked Fish",
        "./Media/Image/Items/fish-cooked.png",
        ItemID.cooked_Food.fish_Cooked,
        "Protein rich...",
        true,
        [15, 25, 0, 10],
        10
      )
    );
    this.items.push(
      new Item(
        "Cooked Spider",
        "./Media/Image/Items/spider-cooked.png",
        ItemID.cooked_Food.spider_Cooked,
        "Protein rich...",
        true,
        [10, 10, 0, -5],
        10
      )
    );
    this.items.push(
      new Item(
        "Cooked Snail",
        "./Media/Image/Items/Snail_Cooked.png",
        ItemID.cooked_Food.snail_Cooked,
        "Frech Delicacy",
        true,
        [10, 10, 0, 5],
        10
      )
    );
  }
}

class Materail_Items implements ItemsNode {
  items: Item[] = [];
  constructor() {
    this.items.push(
      new Item(
        "Stick",
        "./Media/Image/Items/stick.png",
        ItemID.material.stick,
        "Plenty in forest",
        false,
        undefined,
        30
      )
    );
    this.items.push(
      new Item(
        "Rock",
        "./Media/Image/Items/rock.png",
        ItemID.material.rock,
        "Plenty in forest",
        false,
        undefined,
        30
      )
    );
  }
}

class Tool_Items implements ItemsNode {
  items: Item[] = [];
  constructor() {
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
    this.items.push(
      new Item(
        "Passport",
        "./Media/Image/Items/axe.png",
        ItemID.tool.axe,
        "Axe",
        false,
        undefined,
        1
      )
    );
    this.items.push(
      new Item(
        "Passport",
        "./Media/Image/Items/spear.png",
        ItemID.tool.spear,
        "Spear",
        false,
        undefined,
        1
      )
    );
  }
}

export class ItemList {
  items: Item[] = [];
  raw_food_items: Raw_Food_Items;
  tool_items: Tool_Items;
  cooked_food_items: Cooked_Food_Items;
  materail: Materail_Items;
  constructor() {
    this.raw_food_items = new Raw_Food_Items();
    this.tool_items = new Tool_Items();
    this.cooked_food_items = new Cooked_Food_Items();
    this.materail = new Materail_Items();
    for (const i in this.raw_food_items.items) {
      this.items.push(this.raw_food_items.items[i]);
    }
    for (const i in this.tool_items.items) {
      this.items.push(this.tool_items.items[i]);
    }
    for (const i in this.cooked_food_items.items) {
      this.items.push(this.cooked_food_items.items[i]);
    }
    for (const i in this.materail.items) {
      this.items.push(this.materail.items[i]);
    }
  }
}
