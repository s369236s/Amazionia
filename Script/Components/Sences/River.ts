import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";
import Object from "../Entitys/SenceObject";
import { Items } from "../Items/Items";
import { RiverPanel } from "../Panels/RiverPanel";
export class River implements Sence {
  background: Background;
  leaveArrow: Object;
  panel: RiverPanel;
  constructor(item: Items) {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/river.png"
    );
    this.leaveArrow = new Object(
      70,
      220,
      "./Media/Image/UI/Leave-Arrow.png",
      true,
      undefined,
      undefined,
      undefined,
      true,
      2
    );
    this.panel = new RiverPanel(item);
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.leaveArrow.render(ctx);
    this.panel.render(ctx);
  }
}
