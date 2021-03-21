import { Background } from "../Background";
import { UI } from "../UI";
import { Sence } from "../Sence";
import { CanvasDetail } from "../Canvas";

export class Menu implements Sence {
  background: Background;
  startButton: UI;
  constructor() {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/menu.png"
    );
    this.startButton = new UI(
      CanvasDetail.width / 2,
      CanvasDetail.height / 2,
      "./Media/Image/UI/Button/New-Game-Button.png",
      true,
      "./Media/Image/UI/Button/New-Game-Button-Hover.png",
      true,
      1
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.startButton.render(ctx);
  }
}
