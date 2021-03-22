import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";

export class SenceTemplate implements Sence {
  background: Background;
  constructor() {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/menu.png"
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
  }
}
