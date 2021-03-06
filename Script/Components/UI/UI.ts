import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { Controller } from "../../Controllers/Controller";
import { SenceState } from "../State/SenceState";
import Image from "../Entitys/Image";
import { GameState } from "../State/GameState";
import { PanelState } from "../State/PanelState";

export class UI implements Entity {
  pos: Point2D;
  image: Image;
  imageHoverURL: string;
  isHoverAble: boolean;
  isChangeSenceAble: boolean;
  gotoSence: number;
  imageURL: string;
  _b: boolean;
  isOpenPanel: boolean;
  panelTarget: number;
  constructor(
    x: number,
    y: number,
    imageURL: string,
    isHoverAble: boolean = false,
    imageHoverURL: string = "",
    isChangeSenceAble: boolean = false,
    gotoSence: number = 99,
    isGameStart: boolean = false,
    isOpenPanel: boolean = false,
    panelTarget: number = 99
  ) {
    this.image = new Image(imageURL);
    this.imageURL = imageURL;
    this.image.element.src = imageURL;
    this.isHoverAble = isHoverAble;
    this.isChangeSenceAble = isChangeSenceAble;
    this.gotoSence = gotoSence;
    this.imageHoverURL = imageHoverURL;
    this.pos = [x, y];
    this._b = isGameStart;
    this.isOpenPanel = isOpenPanel;
    this.panelTarget = panelTarget;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    if (this.isHoverAble && PanelState.current === PanelState.none) {
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
    if (this.isChangeSenceAble) {
      if (
        Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
        Controller.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
        Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
        Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
      ) {
        SenceState.current = this.gotoSence;
        if (this._b) {
          GameState.current = GameState.inGame;
        }
        Controller.clickPos = [0, 0];
      }
    }
    if (this.isOpenPanel && PanelState.current === PanelState.none) {
      if (
        Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
        Controller.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
        Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
        Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
      ) {
        PanelState.current = this.panelTarget;
        Controller.clickPos = [0, 0];
      }
    }
  }
}
