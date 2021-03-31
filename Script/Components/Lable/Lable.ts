import { Controller } from "../../Controllers/Controller";
import { Entity } from "../Entitys/Entity";
import Image from "../Entitys/Image";
import { guidePage } from "../State/GuidePage";
import { Point2D } from "../Type/Point";

export class Lable implements Entity {
  pos: Point2D;
  lableTag: Image;
  image: Image;
  imageURL: string;
  pageTarget: number;
  constructor(pos: Point2D, imageURL: string, pageTarget: number) {
    this.pos = pos;
    this.lableTag = new Image(imageURL);
    this.imageURL = imageURL;
    this.image = new Image("./Media/Image/UI/Lable.png");
    this.pageTarget = pageTarget;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image.element, this.pos[0], this.pos[1]);
    ctx.drawImage(
      this.lableTag.element,
      this.pos[0] + 7,
      this.pos[1] + 8,
      20,
      20
    );
    if (
      Controller.mousemovePos[0] >
        this.pos[0] + 16 - this.image.element.width / 2 &&
      Controller.mousemovePos[1] >
        this.pos[1] + 18 - this.image.element.height / 2 &&
      Controller.mousemovePos[0] <
        this.pos[0] + 14 + this.image.element.width / 2 &&
      Controller.mousemovePos[1] <
        this.pos[1] + 16 + this.image.element.height / 2
    ) {
      if (this.pos[1] < 432) this.pos[1] += 1;
    } else {
      if (this.pos[1] > 425) this.pos[1] -= 1;
    }
    if (
      Controller.clickPos[0] >
        this.pos[0] + 16 - this.image.element.width / 2 &&
      Controller.clickPos[1] >
        this.pos[1] + 18 - this.image.element.height / 2 &&
      Controller.clickPos[0] <
        this.pos[0] + 14 + this.image.element.width / 2 &&
      Controller.clickPos[1] < this.pos[1] + 16 + this.image.element.height / 2
    ) {
      Controller.clickPos = [0, 0];
      guidePage.current = this.pageTarget;
    }
  }
}
