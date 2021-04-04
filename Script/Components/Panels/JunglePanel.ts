import { Behavior } from "../Behaviors/Behavior";
import { Panel } from "../Entitys/Panel";
import { ItemID, Items } from "../Items/Items";

export class JunglePanel extends Panel {
  behaviors: Behavior[] = [];
  constructor(items: Items) {
    super([50, 275], "./Media/Image/UI/Small-Panel.png", false);
    this.behaviors.push(
      new Behavior(
        [120, 320],
        "gather insect",
        [
          { ID: ItemID.food.snail, amount: 1, dropRate: 50 },
          { ID: ItemID.food.spider, amount: 1, dropRate: 50 },
        ],
        20,
        items
      )
    );
    this.behaviors.push(
      new Behavior(
        [120, 400],
        "gather material",
        [
          { ID: ItemID.material.rock, amount: 1, dropRate: 50 },
          { ID: ItemID.material.stick, amount: 1, dropRate: 50 },
        ],
        10,
        items
      )
    );
    this.behaviors.push(
      new Behavior(
        [120, 480],
        "gather fruit",
        [
          { ID: ItemID.food.banana, amount: 1, dropRate: 30 },
          { ID: ItemID.food.berry, amount: 1, dropRate: 50 },
          { ID: ItemID.food.coconut, amount: 1, dropRate: 20 },
        ],
        30,
        items
      )
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    for (const i in this.behaviors) this.behaviors[i].render(ctx);
  }
}
