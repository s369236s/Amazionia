import { Item } from "../Components/Items/Item";
import { itemBoxs } from "../Components/Items/ItemBoxs";
import { Items } from "../Components/Items/Items";
import {
  playerItems,
  pushItem,
  refreshItemBoxs,
} from "../Components/Items/ItemSystem";

export class ItemCaller {
  items: Items;
  btn: HTMLButtonElement;
  itemBtn: HTMLButtonElement;
  ID: HTMLInputElement;
  amount: HTMLInputElement;
  constructor() {
    this.items = new Items();
    this.btn = document.getElementById("btn") as HTMLButtonElement;
    this.ID = document.getElementById("itemId") as HTMLInputElement;
    this.itemBtn = document.getElementById("itembtn") as HTMLButtonElement;
    this.amount = document.getElementById("itemAmount") as HTMLInputElement;
    this.btn.onclick = () => {
      const inputID = parseInt(this.ID.value);
      const amount = parseInt(this.amount.value);
      const found = this.items.items.find(
        (item) => item.ID === inputID
      ) as Item;
      pushItem(found, amount);
      refreshItemBoxs();
    };
    this.itemBtn.onclick = () => {
      console.table(playerItems);
      console.table(itemBoxs);
    };
  }
}
