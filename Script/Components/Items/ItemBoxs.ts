import { BagPage } from "../State/BagPage";
import { ItemBox } from "./ItemBox";
import { Items } from "./Items";
import { ItemSystem, playerItems, refreshItemBoxs } from "./ItemSystem";
import { Point2D } from "../Type/Point";

export const boxPos: Point2D[] = [];
export const itemBoxs: ItemBox[] = [];

export const boxPosCal: Function = () => {
  let x = 0;
  let y = 0;
  const itemMargin = 70;
  for (let i = 0; i < 16; i++) {
    boxPos.push([70 + itemMargin * x, 220 + itemMargin * y]);
    x++;
    if (x > 3) {
      x = 0;
      y++;
    }
  }
};

export class ItemBoxs {
  static totalPages: number = 1;
  items: Items;
  itemSystem: ItemSystem;
  page: number;
  constructor(items: Items) {
    this.items = items;
    this.page = BagPage.current;
    this.itemSystem = new ItemSystem(items);
  }
  render(ctx: CanvasRenderingContext2D) {
    for (
      let i = (BagPage.current - 1) * 16;
      i < (BagPage.current - 1) * 16 + 16;
      i++
    ) {
      if (i < playerItems.length) itemBoxs[i].render(ctx);
    }
  }
}
