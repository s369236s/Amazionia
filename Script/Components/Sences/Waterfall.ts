import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";
import Object from "../Entitys/SenceObject";
import { Items } from "../Items/Items";

export class Waterfall implements Sence {
  background: Background;
  leaveArrow: Object;
  constructor(_items: Items) {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/waterfall.png"
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
  }
}
