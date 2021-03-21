import { Point2D } from "./Point";

export interface Entity {
  pos: Point2D;
  render(ctx: CanvasRenderingContext2D): void;
}
