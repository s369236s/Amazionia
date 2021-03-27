import { Items, ItemID } from "./Items";
import { Item } from "./Item";

export let playerItems: Item[] = [];

export class ItemSystem {
  items: Item[] = [];
  constructor(items: Items) {
    playerItems.push(items.findOne(ItemID.food.banana));
    playerItems.push(items.findOne(ItemID.food.berry));
    playerItems.push(items.findOne(ItemID.tool.passport));
    playerItems.push(items.findOne(ItemID.food.coconut));
  }
}
