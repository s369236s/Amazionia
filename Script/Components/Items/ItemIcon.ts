import { Point2D } from "../Type/Point";
import { Entity } from "../Entitys/Entity";
import Image from "../Entitys/Image";

export class ItemIcon implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  constructor(pos: Point2D, imageURL: string) {
    this.pos = pos;
    this.image = new Image(imageURL);
    this.imageURL = imageURL;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image.element, this.pos[0], this.pos[1], 50, 50);
  }
}
