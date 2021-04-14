import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";
import { Items } from "../Items/Items";
import { JunglePanel } from "../Panels/JunglePanel";
import Object from "../Entitys/SenceObject";

export class Jungle implements Sence {
  panel: JunglePanel;
  background: Background;
  leaveArrow: Object;
  constructor(items: Items) {
    this.panel = new JunglePanel(items);
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/Jungle.png"
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
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.leaveArrow.render(ctx);
    this.panel.render(ctx);
  }
}
