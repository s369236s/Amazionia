import { PanelState } from "../State/PanelState";
import Object from "./SenceObject";

export class Guide extends Object {
  constructor() {
    super(
      364,
      149,
      "./Media/Image/UI/Guide-Icon.png",
      true,
      undefined,
      true,
      PanelState.guide
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    super.render(ctx);
  }
}
