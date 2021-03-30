import { Lable } from "./Lable";

export class Lables {
  attrLable: Lable;
  constructor() {
    this.attrLable = new Lable(
      [48, 425],
      "./Media/Image/UI/Attr/health-hover.png",
      2
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.attrLable.render(ctx);
  }
}
