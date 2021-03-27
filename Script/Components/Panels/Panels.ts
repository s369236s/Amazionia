import { PanelState } from "../State/PanelState";
import { GuidePanel } from "./GuidePanel";
import { BagPanel } from "./BagPanel";
import { Items } from "../Items/Items";
import { ItemBoxs } from "../Items/ItemBoxs";
export class Panels {
  private guide: GuidePanel;
  private systemItems: Items;
  private bag: BagPanel;
  private itemBoxs: ItemBoxs;
  constructor(items: Items) {
    this.systemItems = items;
    this.guide = new GuidePanel();
    this.bag = new BagPanel();
    this.itemBoxs = new ItemBoxs(items);
  }
  render(ctx: CanvasRenderingContext2D) {
    if (PanelState.current === PanelState.guide) {
      this.guide.render(ctx);
    }
    if (PanelState.current === PanelState.bag) {
      this.bag.render(ctx);
      this.itemBoxs.render(ctx);
    }
  }
}
