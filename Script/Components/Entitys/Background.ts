import { Point2D } from "../Type/Point";
import Image from "./Image";

export class Background {
  private pos: Point2D;
  private image: Image;
  constructor(x: number, y: number, imageURL: string) {
    this.image = new Image(imageURL);
    this.pos = [x, y];
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image.element, this.pos[0], this.pos[1]);
  }
}
