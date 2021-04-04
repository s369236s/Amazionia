import { Background } from "../Entitys/Background";
import { CanvasDetail } from "../Entitys/Canvas";
import { Sence } from "../Entitys/Sence";
import { Point2D } from "../Type/Point";

export class Over implements Sence {
  background: Background;
  stringPos: Point2D[] = [];
  constructor() {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/menu.png"
    );
    this.stringPos.push([CanvasDetail.width / 2, CanvasDetail.height / 2]);
    this.stringPos.push([CanvasDetail.width / 2, CanvasDetail.height / 2 + 30]);
    this.stringPos.push([
      CanvasDetail.width / 2,
      CanvasDetail.height / 2 + 500,
    ]);
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CanvasDetail.width, CanvasDetail.height);
    ctx.font = "30px poppins";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      "Game Over",
      this.stringPos[0][0],
      (this.stringPos[0][1] -= 0.5)
    );
    ctx.font = "20px poppins";
    ctx.fillText(
      "You are dead",
      this.stringPos[1][0],
      (this.stringPos[1][1] -= 0.5)
    );

    ctx.fillText(
      "Made by Allen Deng",
      this.stringPos[2][0],
      (this.stringPos[2][1] -= 0.5)
    );
  }
}
