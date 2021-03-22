import { Point2D } from "../Type/Point";
import Image from "./Image";
export interface Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  render(ctx: CanvasRenderingContext2D): void;
}
