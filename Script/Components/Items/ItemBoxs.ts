import { BagPage } from "../State/BagPage";
import { ItemBox } from "./ItemBox";
import { Items } from "./Items";
import { ItemSystem, playerItems } from "./ItemSystem";
import { Point2D } from "../Type/Point";

export class ItemBoxs {
  static totalPages: number = 1;
  items: Items;
  itemBoxs: ItemBox[] = [];
  itemSystem: ItemSystem;
  page: number;
  boxPos: Point2D[] = [];
  constructor(items: Items) {
    this.items = items;
    this.page = BagPage.current;
    this.itemSystem = new ItemSystem(items);
    let x = 0;
    let y = 0;
    const itemMargin = 70;
    for (let i = 0; i < 16; i++) {
      this.boxPos.push([70 + itemMargin * x, 220 + itemMargin * y]);
      x++;
      if (x > 3) {
        x = 0;
        y++;
      }
    }

    for (const i in playerItems) {
      const itemBox = new ItemBox(this.boxPos[i], playerItems[i]);
      this.itemBoxs.push(itemBox);
      this.boxPos.push([this.boxPos[i][0] + 70, this.boxPos[i][1]]);
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    for (const i in this.itemBoxs) {
      this.itemBoxs[i].render(ctx);
    }
  }
}
