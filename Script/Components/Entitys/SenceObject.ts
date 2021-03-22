import { Entity } from "./Entity";
import { Point2D } from "../Type/Point";
import { Controller } from "../../Controllers/Controller";
import { SenceState } from "../State/SenceState";
import { PanelState } from "../State/PanelState";
import Image from "./Image";

export default class _Object implements Entity {
  pos: Point2D;
  image: Image;
  imageHoverURL: string;
  isHoverAble: boolean;
  imageURL: string;
  isOpenPanelable: boolean;
  panelOpen: number = 99;
  isChangeSenceAble: boolean;
  gotoSence: number;
  _objectName_test: string;
  constructor(
    x: number,
    y: number,
    imageURL: string,
    isHoverAble: boolean = false,
    imageHoverURL: string = "",
    isOpenPanelable: boolean = false,
    panelOpen: number = 99,
    isChangeSenceAble: boolean = false,
    gotoSence: number = 99,
    _objectName_test: string = "none"
  ) {
    this.image = new Image(imageURL);
    this.imageURL = imageURL;
    this.image.element.src = imageURL;
    this.isHoverAble = isHoverAble;
    this.imageHoverURL = imageHoverURL;
    this.isOpenPanelable = isOpenPanelable;
    this.panelOpen = panelOpen;
    this.isChangeSenceAble = isChangeSenceAble;
    this.gotoSence = gotoSence;
    this.pos = [x, y];
    this._objectName_test = _objectName_test;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    if (
      PanelState.current === PanelState.none ||
      this._objectName_test !== "none"
    ) {
      if (this.isOpenPanelable) {
        if (
          Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
          Controller.clickPos[1] >
            this.pos[1] - this.image.element.height / 2 &&
          Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
          Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
        ) {
          Controller.clickPos = [0, 0];
          PanelState.current = this.panelOpen;
        }
      } else if (this.isChangeSenceAble) {
        if (
          Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
          Controller.clickPos[1] >
            this.pos[1] - this.image.element.height / 2 &&
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
          Controller.mousemovePos[1] <
            this.pos[1] + this.image.element.height / 2
        ) {
          ctx.globalAlpha = 0.7;
        } else {
          ctx.globalAlpha = 1;
        }
      }
    }

    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    ctx.restore();
  }
}
