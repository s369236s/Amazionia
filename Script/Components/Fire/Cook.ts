import { Controller } from "../../Controllers/Controller";
import { Time } from "../../Controllers/Time";
import { Item } from "../Items/Item";
import { ItemBox } from "../Items/ItemBox";
import { ItemID, Items } from "../Items/Items";
import {
  deleteItem,
  findPlayerItem,
  playerItems,
  pushItem,
  refreshItemBoxs,
} from "../Items/ItemSystem";
import { Point2D } from "../Type/Point";

interface Ingredient {
  ID: number;
  amount: number;
}

export class Cook {
  pos: Point2D;
  ingredients: Item[] = [];
  ingredients_: Ingredient[] = [];

  itemBoxs: ItemBox[] = [];
  cookItem: Item;
  constructor(
    pos: Point2D,
    ingredientsList: Ingredient[],
    cookID: number,
    items: Items
  ) {
    this.pos = pos;
    this.cookItem = items.findOne(cookID);
    this.ingredients_ = ingredientsList;
    for (const i in ingredientsList) {
      const { ID, amount } = ingredientsList[i];
      const found = items.findOne(ID);
      this.ingredients.push(found);
      this.itemBoxs.push(new ItemBox(pos, found, true, amount));
      pos = [pos[0] + 80, pos[1]];
    }
    this.itemBoxs.push(
      new ItemBox([270, pos[1]], items.findOne(cookID), true, 1)
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    for (const i in this.itemBoxs) {
      this.itemBoxs[i].render(ctx);
    }

    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "25px poppins";
    ctx.fillText("+", this.pos[0] + 65, this.pos[1] + 35);
    ctx.restore();

    let check = false;

    for (const i in this.ingredients_) {
      const found = findPlayerItem(this.ingredients_[i].ID);
      if (!found || found.amount < this.ingredients_[i].amount) {
        break;
      }
      if (parseInt(i) === this.ingredients.length - 1) check = true;
    }

    ctx.fillStyle = check ? "red" : "grey";
    ctx.fillRect(this.pos[0] + 140, this.pos[1] + 15, 40, 19.5);
    ctx.font = "14px Poppins";
    ctx.fillStyle = "white";
    ctx.fillText("cook", this.pos[0] + 160, this.pos[1] + 30);

    if (
      Controller.mousemovePos[0] > this.pos[0] + 140 &&
      Controller.mousemovePos[1] > this.pos[1] + 15 &&
      Controller.mousemovePos[0] < this.pos[0] + 180 &&
      Controller.mousemovePos[1] < this.pos[1] + 34.5 &&
      check
    ) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(this.pos[0] + 140, this.pos[1] + 15, 40, 19.5);
    }
    if (
      Controller.clickPos[0] > this.pos[0] + 140 &&
      Controller.clickPos[1] > this.pos[1] + 15 &&
      Controller.clickPos[0] < this.pos[0] + 180 &&
      Controller.clickPos[1] < this.pos[1] + 34.5 &&
      check
    ) {
      for (const i in this.ingredients) {
        deleteItem(this.ingredients[i], this.ingredients[i].amount);
      }
      Time.minute += 20;
      pushItem(this.cookItem);
      refreshItemBoxs();
      Controller.clickPos = [0, 0];
    }
  }
}
