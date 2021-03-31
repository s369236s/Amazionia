import { PanelState } from "../State/PanelState";
import { GuidePanel } from "./GuidePanel";
import { BagPanel, itemInfoBox } from "./BagPanel";
import { Items } from "../Items/Items";
import { ItemBoxs } from "../Items/ItemBoxs";
import { ItemInfo } from "../Items/ItemInfo";
import { Lables } from "../Lable/Lables";
import { FirePanel } from "./FirePanel";
export class Panels {
  lables: Lables;
  private guide: GuidePanel;
  private bag: BagPanel;
  private itemBoxs: ItemBoxs;
  private fire: FirePanel;
  itemInfo: ItemInfo;
  constructor(items: Items) {
    this.itemInfo = new ItemInfo();
    this.lables = new Lables();
    this.fire = new FirePanel();
    this.guide = new GuidePanel();
    this.bag = new BagPanel();
    this.itemBoxs = new ItemBoxs(items);
  }
  render(ctx: CanvasRenderingContext2D) {
    if (PanelState.current === PanelState.guide) {
      this.lables.render(ctx);
      this.guide.render(ctx);
    }
    if (PanelState.current === PanelState.fire) {
      this.fire.render(ctx);
    }
    if (PanelState.current === PanelState.bag) {
      this.bag.render(ctx);
      this.itemBoxs.render(ctx);
      if (itemInfoBox.current === itemInfoBox.opened) {
        this.itemInfo.render(ctx);
      }
    }
  }
}
