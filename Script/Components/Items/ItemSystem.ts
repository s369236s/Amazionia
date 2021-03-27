import { Items, ItemID } from "./Items";
import { Item } from "./Item";
import { ItemBoxs } from "./ItemBoxs";
export let playerItems: Item[] = [];

export class ItemSystem {
  items: Item[] = [];
  constructor(items: Items) {
    this.pushItem(items.findOne(ItemID.tool.passport));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.berry));
    this.pushItem(items.findOne(ItemID.food.coconut));
    this.pushItem(items.findOne(ItemID.food.coconut));
    this.pushItem(items.findOne(ItemID.food.coconut));
    this.pushItem(items.findOne(ItemID.food.fish));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));
    this.pushItem(items.findOne(ItemID.food.banana));

    console.table(playerItems);
  }
  pushItem(pushItem: Item) {
    const found = playerItems.findIndex((item) => item.ID === pushItem.ID);
    // if (found >= 0) {
    //   console.log(playerItems[found].name);
    //   playerItems[found].amount++;
    //   return;
    // }
    if (playerItems.length % 15 == 0 && playerItems.length !== 0) {
      ItemBoxs.totalPages++;
      console.log(ItemBoxs.totalPages);
    }
    playerItems.push(pushItem);
  }
  deleteItem(deleteItem: Item) {
    const found = playerItems.find((item) => item.ID === deleteItem.ID);
    if (!found) return;
  }
}
