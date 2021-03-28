import { Items, ItemID } from "./Items";
import { Item } from "./Item";
import { boxPos, boxPosCal, itemBoxs, ItemBoxs } from "./ItemBoxs";
import { ItemBox } from "./ItemBox";
import { itemInfoBox } from "../Panels/BagPanel";
export let playerItems: Item[] = [];

export const pushItem = (pushItem: Item, amount: number = 1) => {
  const found = playerItems.findIndex((item) => item.ID === pushItem.ID);
  if (playerItems.length > 47) return;
  if (found >= 0) {
    console.log(playerItems[found].name);
    if (playerItems[found].amount < playerItems[found].maxAmount)
      playerItems[found].amount += amount;
    return;
  }
  if (playerItems.length % 15 == 0 && playerItems.length !== 0) {
    ItemBoxs.totalPages++;
  }
  const itemBox = new ItemBox(boxPos[playerItems.length % 16], pushItem);
  itemBoxs.push(itemBox);
  playerItems.push(pushItem);
};
export const deleteItem = (deleteItem: Item) => {
  refreshItemBoxs();
  const found = playerItems.findIndex((item) => item.ID === deleteItem.ID);
  if (found >= 0) {
    console.log(playerItems[found]);
    if (playerItems[found].amount < 2) {
      playerItems.splice(found, 1);
    } else playerItems[found].amount--;
  }
  refreshItemBoxs();
};

export const refreshItemBoxs = () => {
  for (let i = 0; i < playerItems.length; i++) {
    itemBoxs[i].item = playerItems[i];
    itemBoxs[i].image = playerItems[i].image;
    itemBoxs[i].pos = boxPos[i];
  }
};

export class ItemSystem {
  items: Item[] = [];
  constructor(items: Items) {
    boxPosCal();
    pushItem(items.findOne(ItemID.tool.passport));
  }
}
