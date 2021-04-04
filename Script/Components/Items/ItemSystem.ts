import { Items, ItemID } from "./Items";
import { Item } from "./Item";
import { boxPos, boxPosCal, itemBoxs, ItemBoxs } from "./ItemBoxs";
import { ItemBox } from "./ItemBox";
import { itemPop } from "./itemPop";

export let playerItems: Item[] = [];
export let infoPop = false;

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

export const betterPushItem = (
  pushItemID: number,
  amount: number,
  items: Items
) => {
  const found = playerItems.findIndex((item) => item.ID === pushItemID);
  if (pushItemID === ItemID.nothing.nothing) {
    itemPop.isPop = true;
    itemPop.amount = 0;
    itemPop.itemName = "fail";
    return;
  }
  if (playerItems.length > 47) return;
  if (found >= 0) {
    if (playerItems[found].amount < playerItems[found].maxAmount) {
      playerItems[found].amount += amount;
      itemPop.isPop = true;
      itemPop.amount = 1;
      itemPop.itemName = playerItems[found].name;
    }
    return;
  }

  const itemBox = new ItemBox(
    boxPos[playerItems.length % 16],
    items.findOne(pushItemID)
  );
  itemBoxs.push(itemBox);
  itemPop.isPop = true;
  itemPop.amount = 1;
  itemPop.itemName = items.findOne(pushItemID).name;
  playerItems.push(items.findOne(pushItemID));
};

export const pushItem = (pushItem: Item, amount: number = 1) => {
  const found = playerItems.findIndex((item) => item.ID === pushItem.ID);
  if (playerItems.length > 47) return;
  if (found >= 0) {
    if (playerItems[found].amount < playerItems[found].maxAmount) {
      playerItems[found].amount += amount;
      itemPop.isPop = true;
      itemPop.amount = 1;
      itemPop.itemName = pushItem.name;
    }
    return;
  }
  if (pushItem.ID === ItemID.nothing.nothing) {
    itemPop.isPop = true;
    itemPop.amount = 0;
    itemPop.itemName = "fail";
    return;
  }
  const itemBox = new ItemBox(boxPos[playerItems.length % 16], pushItem);
  itemBoxs.push(itemBox);
  itemPop.isPop = true;
  itemPop.amount = 1;
  itemPop.itemName = pushItem.name;
  playerItems.push(pushItem);
};
export const deleteItem = (deleteItem: Item, amount: number = 1) => {
  refreshItemBoxs();
  const found = playerItems.findIndex((item) => item.ID === deleteItem.ID);
  if (found >= 0) {
    if (playerItems[found].amount < 2) {
      itemPop.isPop = true;
      itemPop.amount = -1;
      itemPop.itemName = deleteItem.name;
      playerItems.splice(found, 1);
    } else {
      itemPop.isPop = true;
      itemPop.amount = -1;
      itemPop.itemName = deleteItem.name;
      playerItems[found].amount -= amount;
    }
  } else return;

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
