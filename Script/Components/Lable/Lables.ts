import { Lable } from "./Lable";

export class Lables {
  attrLable: Lable;
  mapLable: Lable;
  missonLable: Lable;
  constructor() {
    this.attrLable = new Lable(
      [43, 425],
      "./Media/Image/UI/Attr/health-hover.png",
      2
    );
    this.mapLable = new Lable([78, 425], "./Media/Image/MapIcon/home.png", 6);
    this.missonLable = new Lable(
      [113, 425],
      "./Media/Image/UI/exclamation_mark.png",
      7
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.attrLable.render(ctx);
    this.mapLable.render(ctx);
    this.missonLable.render(ctx);
  }
}
