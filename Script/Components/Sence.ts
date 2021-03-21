import { Background } from "./Background";
export interface Sence {
  background: Background;
  render(ctx: CanvasRenderingContext2D): void;
}
