import { Entity } from "./Entity";
import { Point2D } from "./Point";
import { Controller } from "../Controllers/Controller";
import Image from "./Image";
export class Attr implements Entity {
  pos: Point2D;
  attrValue: number;
  image: Image;
  imageURL: string;
  isHoverAble: boolean;
  imageHoverURL: string;
  constructor(
    x: number,
    y: number,
    imageURL: string,
    attrValue: number,
    isHoverAble: boolean,
    imageHoverURL: string
  ) {
    this.pos = [x, y];
    this.imageURL = imageURL;
    this.attrValue = attrValue;
    this.isHoverAble = isHoverAble;
    this.imageHoverURL = imageHoverURL;
    this.image = new Image(imageURL);
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    ctx.fillStyle = "white";
    ctx.font = "16px Poppins";
    ctx.textAlign = "center";
    ctx.fillText(
      this.attrValue.toString(),
      this.image.element.width +
        this.pos[0] -
        this.image.element.width / 2 +
        15,
      60
    );
    if (this.isHoverAble) {
      if (
        Controller.mousemovePos[0] >
          this.pos[0] - this.image.element.width / 2 &&
        Controller.mousemovePos[1] >
          this.pos[1] - this.image.element.height / 2 &&
        Controller.mousemovePos[0] <
          this.pos[0] + this.image.element.width / 2 &&
        Controller.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
      ) {
        this.image.element.src = this.imageHoverURL;
      } else {
        this.image.element.src = this.imageURL;
      }
    }
  }
}
