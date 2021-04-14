import { Background } from "../Entitys/Background";
import { UI } from "../UI/UI";
import { Sence } from "../Entitys/Sence";
import { CanvasDetail } from "../Entitys/Canvas";

export class Menu implements Sence {
  background: Background;
  startButton: UI;
  constructor() {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/Menu.png"
    );
    this.startButton = new UI(
      CanvasDetail.width / 2,
      CanvasDetail.height / 2,
      "./Media/Image/UI/Button/New-Game-Button.png",
      true,
      "./Media/Image/UI/Button/New-Game-Button-Hover.png",
      true,
      1,
      true
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.startButton.render(ctx);
  }
}
