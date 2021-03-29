import { Point2D } from "../Type/Point";

interface IString {
  pos: Point2D;
  text: string;
}

export class String implements IString {
  pos: Point2D;
  text: string;
  color: string;
  fontSize: string;
  constructor(pos: Point2D, text: string, style: string[] = ["16px", "black"]) {
    this.text = text;
    this.pos = pos;
    this.fontSize = style[0];
    this.color = style[1];
  }
  fillText(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.font = `500 ${this.fontSize} cursive__`;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.pos[0], this.pos[1]);
    ctx.restore();
  }
}

export const titlePos: Point2D = [112, 233];
export interface Page {
  title: String;
  article: String[];
  render(ctx: CanvasRenderingContext2D): void;
}
