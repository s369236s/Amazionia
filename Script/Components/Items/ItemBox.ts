import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { Item } from "./Item";
import Image from "../Entitys/Image";

export class ItemBox {
  item: Item;
  pos: Point2D;
  image: Image;
  constructor(pos: Point2D, item: Item) {
    this.item = item;
    this.pos = pos;
    this.image = new Image(item.imageURL);
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.411)";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);
    ctx.restore();
    ctx.drawImage(this.image.element, this.pos[0] + 5, this.pos[1] + 5, 40, 40);
  }
}
