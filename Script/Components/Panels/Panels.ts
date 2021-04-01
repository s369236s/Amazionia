import { PanelState } from "../State/PanelState";
import { GuidePanel } from "./GuidePanel";
import { BagPanel, itemInfoBox } from "./BagPanel";
import { Items } from "../Items/Items";
import { ItemBoxs } from "../Items/ItemBoxs";
import { ItemInfo } from "../Items/ItemInfo";
import { Lables } from "../Lable/Lables";
import { FirePanel } from "./FirePanel";
import { TentPanel } from "./TentPanel";
export class Panels {
  private lables: Lables;
  private guide: GuidePanel;
  private bag: BagPanel;
  private tent: TentPanel;
  private itemBoxs: ItemBoxs;
  private fire: FirePanel;
  bagitemInfo: ItemInfo;
  fireitemInfo: ItemInfo;
  constructor(items: Items) {
    this.bagitemInfo = new ItemInfo(false);
    this.fireitemInfo = new ItemInfo(true);
    this.lables = new Lables();
    this.fire = new FirePanel(items);
    this.guide = new GuidePanel();
    this.bag = new BagPanel();
    this.tent = new TentPanel(items);
    this.itemBoxs = new ItemBoxs(items);
  }
  render(ctx: CanvasRenderingContext2D) {
    if (PanelState.current === PanelState.guide) {
      this.lables.render(ctx);
      this.guide.render(ctx);
    }
    if (PanelState.current === PanelState.fire) {
      this.fire.render(ctx);
      if (itemInfoBox.current === itemInfoBox.opened) {
        this.fireitemInfo.render(ctx);
      }
    }
    if (PanelState.current === PanelState.tent) {
      this.tent.render(ctx);
      if (itemInfoBox.current === itemInfoBox.opened) {
        this.fireitemInfo.render(ctx);
      }
    }
    if (PanelState.current === PanelState.bag) {
      this.bag.render(ctx);
      this.itemBoxs.render(ctx);
      if (itemInfoBox.current === itemInfoBox.opened) {
        this.bagitemInfo.render(ctx);
      }
    }
  }
}
