import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { Controller } from "../../Controllers/Controller";
import { SenceState } from "../State/SenceState";
import { MapState } from "../State/MapState";
import Image from "../Entitys/Image";
import { Time } from "../../Controllers/Time";

export class MapIcon implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  isHoverAble: boolean;
  isChangeSenceAble: boolean;
  gotoSence: number;
  senceName: string;
  constructor(
    pos: Point2D,
    imageURL: string,
    isHoverAble: boolean = false,
    isChangeSenceAble: boolean = false,
    gotoSence: number = 99,
    senceName: string = ""
  ) {
    this.pos = [pos[0], pos[1]];
    this.imageURL = imageURL;
    this.isHoverAble = isHoverAble;
    this.isChangeSenceAble = isChangeSenceAble;
    this.gotoSence = gotoSence;
    this.senceName = senceName;
    this.image = new Image(imageURL);
    MapState.mapPos.push([pos[0], pos[1], this.senceName]);
  }

  calculateCost(currentPos: Point2D, destPos: Point2D) {
    const difference = Math.sqrt(
      (currentPos[0] - destPos[0]) ** 2 + (currentPos[1] - destPos[1]) ** 2
    );
    return Math.round(difference);
  }
  debug() {
    console.log(
      `${MapState.mapPos[MapState.current][2]} ${
        MapState.mapPos[MapState.current][0]
      },${MapState.mapPos[MapState.current][1]}`,
      `${MapState.mapPos[this.gotoSence][2]} ${
        MapState.mapPos[this.gotoSence][0]
      },${MapState.mapPos[this.gotoSence][1]}`,
      "distance = " +
        this.calculateCost(
          [
            MapState.mapPos[MapState.current][0],
            MapState.mapPos[MapState.current][1],
          ],
          [
            MapState.mapPos[this.gotoSence][0],
            MapState.mapPos[this.gotoSence][1],
          ]
        )
    );
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
        let costTime: number = 0;
        Controller.clickPos = [0, 0];
        if (MapState.current !== this.gotoSence) {
          costTime =
            this.calculateCost(
              [
                MapState.mapPos[MapState.current][0],
                MapState.mapPos[MapState.current][1],
              ],
              [
                MapState.mapPos[this.gotoSence][0],
                MapState.mapPos[this.gotoSence][1],
              ]
            ) / 2;
        }
        Time.minute += costTime;
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
