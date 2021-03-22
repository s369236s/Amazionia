import { Entity } from "./Entity";
import { Point2D } from "./Point";
import { Controller } from "../Controllers/Controller";
import { SenceState } from "./SenceState";
import Image from "./Image";

export default class _Object implements Entity {
  pos: Point2D;
  image: Image;
  imageHoverURL: string;
  isHoverAble: boolean;
  imageURl: string;
  isOpenPanelable: boolean;
  panelOpen: number = 99;
  isChangeSenceAble: boolean;
  gotoSence: number;
  constructor(
    x: number,
    y: number,
    imageURl: string,
    isHoverAble: boolean = false,
    imageHoverURL: string = "",
    isOpenPanelable: boolean = false,
    panelOpen: number = 99,
    isChangeSenceAble: boolean = false,
    gotoSence: number = 99
  ) {
    this.image = new Image(imageURl);
    this.imageURl = imageURl;
    this.image.element.src = imageURl;
    this.isHoverAble = isHoverAble;
    this.imageHoverURL = imageHoverURL;
    this.isOpenPanelable = isOpenPanelable;
    this.panelOpen = panelOpen;
    this.isChangeSenceAble = isChangeSenceAble;
    this.gotoSence = gotoSence;
    this.pos = [x, y];
  }
  render(ctx: CanvasRenderingContext2D): void {
    // ctx.save();
    if (this.isOpenPanelable) {
    } else if (this.isChangeSenceAble) {
      if (
        Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
        Controller.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
        Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
        Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
      ) {
        Controller.clickPos = [0, 0];
        SenceState.current = this.gotoSence;
      }
    }
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

    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    // ctx.restore();
  }
}
