import { Point2D } from "../Type/Point";
import { Entity } from "./Entity";
import Object from "./SenceObject";
import Image from "./Image";
import { PanelState } from "../State/PanelState";
export class Panel implements Entity {
  pos: Point2D;
  customXPos: Point2D;
  imageURL: string;
  image: Image;
  xButton: Object;
  xImageURL: string = "./Media/Image/UI/x.png";
  _b: boolean;
  constructor(
    pos: Point2D = [50, 150],
    imageURL: string = "./Media/Image/UI/Panel.png",
    needX: boolean = true,
    customXPos: Point2D = [320, 175]
  ) {
    this.pos = [pos[0], pos[1]];
    this.imageURL = imageURL;
    this.image = new Image(imageURL);
    this.customXPos = customXPos;
    this._b = needX;
    this.xButton = new Object(
      customXPos[0],
      customXPos[1],
      this.xImageURL,
      true,
      "",
      true,
      PanelState.none,
      false,
      undefined,
      "x"
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image.element, this.pos[0], this.pos[1]);
    if (this._b) this.xButton.render(ctx);
  }
}
