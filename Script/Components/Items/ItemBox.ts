import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { Item } from "./Item";
import Image from "../Entitys/Image";
import { Controller } from "../../Controllers/Controller";
import { itemInfoBox } from "../Panels/BagPanel";

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
    ctx.fillStyle = "rgba(255,255, 255)";
    ctx.fillText(
      this.item.amount.toString(),
      this.pos[0] + 45,
      this.pos[1] + 47.5
    );
    if (itemInfoBox.current === itemInfoBox.none) {
      if (
        Controller.mousemovePos[0] > this.pos[0] &&
        Controller.mousemovePos[1] > this.pos[1] &&
        Controller.mousemovePos[0] < this.pos[0] + 50 &&
        Controller.mousemovePos[1] < this.pos[1] + 50
      ) {
        ctx.globalAlpha = 0.7;
      } else {
        ctx.globalAlpha = 1;
      }
      if (
        Controller.clickPos[0] > this.pos[0] &&
        Controller.clickPos[1] > this.pos[1] &&
        Controller.clickPos[0] < this.pos[0] + 50 &&
        Controller.clickPos[1] < this.pos[1] + 50
      ) {
        itemInfoBox.current = itemInfoBox.opened;
        itemInfoBox.item = this.item;
        Controller.clickPos = [0, 0];
      }
    }
    ctx.drawImage(this.image.element, this.pos[0] + 5, this.pos[1] + 5, 40, 40);
    ctx.restore();
  }
}
