import { PanelState } from "../State/PanelState";
import { GuidePanel } from "../Panels/GuidePanel";
import { BagPanel } from "../Panels/BagPanel";
export class Panels {
  private guide: GuidePanel;
  private bag: BagPanel;
  constructor() {
    this.guide = new GuidePanel();
    this.bag = new BagPanel();
  }
  render(ctx: CanvasRenderingContext2D) {
    if (PanelState.current === PanelState.guide) {
      this.guide.render(ctx);
    }
    if (PanelState.current === PanelState.bag) {
      this.bag.render(ctx);
    }
  }
}
