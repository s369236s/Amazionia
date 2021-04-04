import { Over } from "../Sences/Over";
import { Sences } from "../Sences/Sences";
import { GameState } from "../State/GameState";
export class Canvas {
  private Sences: Sences;
  private over: Over;
  constructor() {
    this.Sences = new Sences();
    this.over = new Over();
  }
  render(ctx: CanvasRenderingContext2D) {
    if (
      GameState.current !== GameState.over ||
      GameState.current !== GameState.over
    )
      this.Sences.render(ctx);
    if (GameState.current === GameState.over) this.over.render(ctx);
  }
}

export class CanvasDetail {
  static width: number;
  static height: number;
  static styleCursor: string = "default";
}
