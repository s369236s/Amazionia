import { Items, ItemID } from "./Items";
import { Item } from "./Item";
import { boxPos, boxPosCal, itemBoxs, ItemBoxs } from "./ItemBoxs";
import { ItemBox } from "./ItemBox";

export let playerItems: Item[] = [];

export const findPlayerItems = (itemIDs: number[]) => {
  for (const i in itemIDs) {
    const found = playerItems.find((item) => item.ID === itemIDs[i]);
    if (!found) {
      return false;
    }
  }
  return true;
};

export const findPlayerItem = (ID: number) => {
  const found = playerItems.find((item) => item.ID === ID);
  if (!found) return null;
  return found;
};

export const pushItem = (pushItem: Item, amount: number = 1) => {
  const found = playerItems.findIndex((item) => item.ID === pushItem.ID);
  if (playerItems.length > 47) return;
  if (found >= 0) {
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
export const deleteItem = (deleteItem: Item, amount: number = 1) => {
  refreshItemBoxs();
  const found = playerItems.findIndex((item) => item.ID === deleteItem.ID);
  if (found >= 0) {
    if (playerItems[found].amount < 2) {
      playerItems.splice(found, 1);
    } else playerItems[found].amount -= amount;
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
