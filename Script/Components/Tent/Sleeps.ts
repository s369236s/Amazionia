import { Cook } from "../Fire/Cook";
import { ItemID, Items } from "../Items/Items";
import { tentPage } from "../Panels/TentPanel";
import { Sleep } from "./Sleep";

export class Sleeps {
  sleeps: Sleep[] = [];
  cooks: Cook[] = [];
  constructor(items: Items) {
    this.sleeps.push(new Sleep([80, 210], 60, [8, 0, 0, 5]));
    this.sleeps.push(new Sleep([80, 280], 180, [24, 0, 0, 10]));
    this.sleeps.push(new Sleep([80, 350], 360, [48, 0, 0, 15]));
    this.cooks.push(
      new Cook(
        [80, 210],
        [
          { ID: ItemID.material.stick, amount: 1 },
          { ID: ItemID.material.rock, amount: 2 },
        ],
        ItemID.tool.spear,
        items,
        true
      )
    );
    this.cooks.push(
      new Cook(
        [80, 280],
        [
          { ID: ItemID.material.stick, amount: 1 },
          { ID: ItemID.material.rock, amount: 2 },
        ],
        ItemID.tool.axe,
        items,
        true
      )
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    if (tentPage.current === tentPage.sleep)
      for (const i in this.sleeps) {
        this.sleeps[i].render(ctx);
      }
    if (tentPage.current === tentPage.tool) {
      for (const i in this.cooks) {
        this.cooks[i].render(ctx);
      }
    }
  }
}
