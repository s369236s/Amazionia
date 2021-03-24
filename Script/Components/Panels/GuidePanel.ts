import { Panel } from "../Entitys/Panel";
import { Panels } from "./Panels";

export class GuidePanel extends Panel {
  constructor() {
    super([10, 200], "./Media/Image/UI/Guide-Panel.png", [373, 225]);
  }
  prevPage() {}
  nextPage() {}
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
  }
}
