import { Items } from "../Components/Items/Items";

export class ItemCaller {
  items: Items;
  btn: HTMLButtonElement;
  ID: HTMLInputElement;
  amount: HTMLInputElement;
  constructor() {
    this.items = new Items();
    this.btn = document.getElementById("btn") as HTMLButtonElement;
    this.ID = document.getElementById("itemId") as HTMLInputElement;
    this.amount = document.getElementById("itemId") as HTMLInputElement;
    this.btn.onclick = () => {
      const inputID = parseInt(this.ID.value);
      const found = this.items.items.find((item) => item.ID === inputID);
      console.table(found);
    };
  }
}
