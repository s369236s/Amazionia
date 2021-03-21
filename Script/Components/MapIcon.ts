import { Entity } from "./Entity";
import { Point2D } from "./Point";
import { Controller } from "../Controllers/Controller";
import { SenceState } from "./SenceState";
import { MapState } from "./MapState";
import Image from "./Image";

export class MapIcon implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  isHoverAble: boolean;
  isChangeSenceAble: boolean;
  gotoSence: number;
  constructor(
    x: number,
    y: number,
    imageURL: string,
    isHoverAble: boolean = false,
    isChangeSenceAble: boolean = false,
    gotoSence: number = 99
  ) {
    this.pos = [x, y];
    this.imageURL = imageURL;
    this.isHoverAble = isHoverAble;
    this.isChangeSenceAble = isChangeSenceAble;
    this.gotoSence = gotoSence;
    this.image = new Image(imageURL);
    MapState.mapPos.push([x, y]);
    console.log(MapState.mapPos);
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.save();
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
        ctx.globalAlpha = 0.7;
      } else {
        ctx.globalAlpha = 1;
      }
    }
    if (this.isChangeSenceAble) {
      if (
        Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
        Controller.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
        Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
        Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
      ) {
        Controller.clickPos = [0, 0];
        SenceState.current = this.gotoSence;
        MapState.current = this.gotoSence;
      }
    }
    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2 + 4,
      this.pos[1] - this.image.element.height / 2 + 2
    );
    ctx.restore();
  }
}
