import { ItemID, Items } from "../Items/Items";
import { Point2D } from "../Type/Point";
import { Cook } from "./Cook";

export class Cooks {
  cooks: Cook[] = [];
  constructor(items: Items) {
    this.cooks.push(
      new Cook(
        [80, 210],
        [
          { ID: ItemID.food.fish, amount: 1 },
          { ID: ItemID.material.stick, amount: 2 },
        ],
        ItemID.cooked_Food.fish_Cooked,
        items
      )
    );
    this.cooks.push(
      new Cook(
        [80, 280],
        [
          { ID: ItemID.food.fish, amount: 1 },
          { ID: ItemID.material.stick, amount: 2 },
        ],
        ItemID.cooked_Food.fish_Cooked,
        items
      )
    );
    this.cooks.push(
      new Cook(
        [80, 350],
        [
          { ID: ItemID.food.snail, amount: 1 },
          { ID: ItemID.material.stick, amount: 2 },
        ],
        ItemID.cooked_Food.snail_Cooked,
        items
      )
    );
    this.cooks.push(
      new Cook(
        [80, 420],
        [
          { ID: ItemID.food.spider, amount: 1 },
          { ID: ItemID.material.stick, amount: 3 },
        ],
        ItemID.cooked_Food.spider_Cooked,
        items
      )
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    for (const i in this.cooks) {
      this.cooks[i].render(ctx);
    }
  }
}
