import { Sences } from "../Sences/Sences";
export class Canvas {
  private Sences: Sences;
  constructor() {
    this.Sences = new Sences();
  }
  render(ctx: CanvasRenderingContext2D) {
    this.Sences.render(ctx);
  }
}

export class CanvasDetail {
  static width: number;
  static height: number;
  static styleCursor: string = "default";
}
