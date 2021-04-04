import { Controller } from "../../Controllers/Controller";
import { Time } from "../../Controllers/Time";
import Image from "../Entitys/Image";
import { ItemAttr } from "../Items/Item";
import { AttrState } from "../State/AttrState";
import { Point2D } from "../Type/Point";

export class Sleep {
  pos: Point2D;
  image: Image;
  recoverAttr: ItemAttr;
  sleepTime: number;
  constructor(pos: Point2D, sleepTime: number, recoverAttr: ItemAttr) {
    this.pos = pos;
    this.sleepTime = sleepTime;
    this.recoverAttr = recoverAttr;
    this.image = new Image("./Media/Image/UI/Sleep.png");
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.411)";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);
    ctx.drawImage(this.image.element, this.pos[0] + 5, this.pos[1] + 5, 40, 40);
    ctx.fillStyle = "black";
    ctx.fillText;
    ctx.fillText(
      `${this.sleepTime / 60} hours`,
      this.pos[0] + 100,
      this.pos[1] + 30
    );
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos[0] + 200, this.pos[1] + 15, 40, 19.5);
    ctx.font = "14px Poppins";
    ctx.fillStyle = "white";
    ctx.fillText("sleep", this.pos[0] + 220, this.pos[1] + 30);

    if (
      Controller.mousemovePos[0] > this.pos[0] + 200 &&
      Controller.mousemovePos[1] > this.pos[1] + 15 &&
      Controller.mousemovePos[0] < this.pos[0] + 240 &&
      Controller.mousemovePos[1] < this.pos[1] + 34.5
    ) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(this.pos[0] + 200, this.pos[1] + 15, 40, 19.5);
    }
    if (
      Controller.clickPos[0] > this.pos[0] + 200 &&
      Controller.clickPos[1] > this.pos[1] + 15 &&
      Controller.clickPos[0] < this.pos[0] + 240 &&
      Controller.clickPos[1] < this.pos[1] + 34.5
    ) {
      Time.minute += this.sleepTime;
      AttrState.health += this.recoverAttr[0];
      AttrState.mentality += this.recoverAttr[3];
      Controller.clickPos = [0, 0];
    }
  }
}
