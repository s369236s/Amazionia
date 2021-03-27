import { ItemPage } from "../State/BagPage";
import { ItemBox } from "./ItemBox";
import { Items } from "./Items";
import { ItemSystem, playerItems } from "./ItemSystem";
import { Point2D } from "../Type/Point";

export class ItemBoxs {
  items: Items;
  itemBoxs: ItemBox[] = [];
  itemSystem: ItemSystem;
  page: number;
  boxPos: Point2D[] = [[70, 220]];
  constructor(items: Items) {
    this.items = items;
    this.page = ItemPage.current;
    this.itemSystem = new ItemSystem(items);
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
