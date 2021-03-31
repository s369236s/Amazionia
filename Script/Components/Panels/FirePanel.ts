import { PageController } from "../Entitys/pageController";
import { Panel } from "../Entitys/Panel";

export const FirePage = {
  current: 0,
  maxPage: 4, // actually page -1
};

export class FirePanel extends Panel {
  prevPageController: PageController;
  nextPageController: PageController;
  constructor() {
    super();
    this.prevPageController = new PageController(
      [163, 528],
      "./Media/Image/UI/PrevPage.png",
      -1,
      "FIRE"
    );
    this.nextPageController = new PageController(
      [235, 527],
      "./Media/Image/UI/NextPage.png",
      1,
      "FIRE"
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    this.prevPageController.render(ctx);
    this.nextPageController.render(ctx);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText(FirePage.current.toString(), 200, 532);
    ctx.restore();
  }
}
