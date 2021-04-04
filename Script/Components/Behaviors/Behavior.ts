import { Controller } from "../../Controllers/Controller";
import { Time } from "../../Controllers/Time";
import { ItemAttr } from "../Items/Item";
import { ItemID, Items } from "../Items/Items";
import {
  betterPushItem,
  findPlayerItem,
  playerItems,
  pushItem,
} from "../Items/ItemSystem";
import { AttrState } from "../State/AttrState";
import { Point2D } from "../Type/Point";

export interface ItemCollection {
  ID: number;
  amount: number;
  dropRate: number;
}

export interface ItemNeeded {
  ID: number;
  amount: number;
}

export class Behavior {
  pos: Point2D;
  text: string;
  itemCollections: ItemCollection[] = [];
  costTime: number;
  hint: string;
  itemNeeded: ItemNeeded[];
  items: Items;
  table: number[] = [];
  total: number = 0;
  constructor(
    pos: Point2D,
    text: string,
    itemCollections: ItemCollection[],
    costTime: number,
    items: Items,
    hint: string = "",
    itemNeeded: ItemNeeded[] = []
  ) {
    this.pos = pos;
    this.text = text;
    this.itemCollections = itemCollections;
    this.costTime = costTime;
    this.hint = hint;
    this.itemNeeded = itemNeeded;
    this.items = items;
    for (const i in itemCollections) {
      this.total += this.itemCollections[i].dropRate;
      this.table.push(this.itemCollections[i].dropRate);
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.font = "16px poppins";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.pos[0], this.pos[1]);
    ctx.fillText(`${this.costTime}mins`, this.pos[0] + 100, this.pos[1]);
    ctx.font = "12px poppins";
    ctx.fillText(this.hint, this.pos[0], this.pos[1] + 20);

    let check = false;
    let check2 = false;
    if (this.itemNeeded.length === 0) check = true;
    else {
      for (const i in this.itemNeeded) {
        const found = playerItems.find(
          (item) => item.ID === this.itemNeeded[i].ID
        );
        if (!found) {
          check = false;
          break;
        }
        if (parseInt(i) === this.itemNeeded.length - 1) check = true;
      }
    }
    ctx.fillStyle = check ? "red" : "grey";
    ctx.fillRect(this.pos[0] + 160, this.pos[1] - 15, 40, 19.5);
    ctx.font = "14px Poppins";
    ctx.fillStyle = "white";
    ctx.fillText("Do", this.pos[0] + 180, this.pos[1]);
    if (
      Controller.mousemovePos[0] > this.pos[0] + 160 &&
      Controller.mousemovePos[1] > this.pos[1] - 15 &&
      Controller.mousemovePos[0] < this.pos[0] + 200 &&
      Controller.mousemovePos[1] < this.pos[1] + 4.5 &&
      check
    ) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(this.pos[0] + 160, this.pos[1] - 15, 40, 19.5);
    }
    if (
      Controller.clickPos[0] > this.pos[0] + 160 &&
      Controller.clickPos[1] > this.pos[1] - 15 &&
      Controller.clickPos[0] < this.pos[0] + 200 &&
      Controller.clickPos[1] < this.pos[1] + 4.5 &&
      check
    ) {
      Controller.clickPos = [0, 0];

      const a = (AttrState.hunger -= this.costTime / 15);
      const b = (AttrState.thirsty -= this.costTime / 10);
      if (AttrState.hunger <= 0) AttrState.hunger = 0;
      else AttrState.hunger = a;
      if (AttrState.thirsty <= 0) AttrState.thirsty = 0;
      else AttrState.thirsty = b;
      Time.minute += this.costTime;

      let rN = Math.floor(Math.random() * this.total);

      for (let i = 0; i < this.table.length; i++) {
        if (rN <= this.table[i]) {
          console.log(
            `award ${this.items.findOne(this.itemCollections[i].ID).name}`
          );
          betterPushItem(this.itemCollections[i].ID, 1, this.items);
          break;
        } else {
          rN -= this.table[i];
        }
      }
    }

    ctx.restore();
  }
}
