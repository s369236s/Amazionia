import { Behavior } from "../Behaviors/Behavior";
import { Panel } from "../Entitys/Panel";
import { ItemID, Items } from "../Items/Items";

export class RiverPanel extends Panel {
  behaviors: Behavior[] = [];
  constructor(items: Items) {
    super([50, 275], "./Media/Image/UI/Small-Panel.png", false);
    this.behaviors.push(
      new Behavior(
        [120, 320],
        "catch fish",
        [
          { ID: ItemID.food.fish, amount: 1, dropRate: 70 },
          { ID: ItemID.nothing.nothing, amount: 1, dropRate: 30 },
        ],
        30,
        items,
        "(need spear)",
        [{ ID: 161, amount: 1 }]
      )
    );
    this.behaviors.push(
      new Behavior(
        [120, 400],
        "fill water",
        [{ ID: ItemID.food.freshWater, amount: 1, dropRate: 70 }],
        10,
        items
      )
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    for (const i in this.behaviors) this.behaviors[i].render(ctx);
  }
}
