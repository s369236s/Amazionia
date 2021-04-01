import { PageController } from "../Entitys/pageController";
import { Panel } from "../Entitys/Panel";
import { Items } from "../Items/Items";
import { Sleeps } from "../Tent/Sleeps";

export const tentPage = {
  current: 1,
  sleep: 1,
  tool: 2,
  maxPage: 3, //-1
};

export class TentPanel extends Panel {
  prevPageController: PageController;
  nextPageController: PageController;
  sleeps: Sleeps;
  constructor(items: Items) {
    super();
    this.prevPageController = new PageController(
      [163, 528],
      "./Media/Image/UI/PrevPage.png",
      -1,
      "TENT"
    );
    this.nextPageController = new PageController(
      [235, 527],
      "./Media/Image/UI/NextPage.png",
      1,
      "TENT"
    );
    this.sleeps = new Sleeps(items);
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    this.nextPageController.render(ctx);
    this.prevPageController.render(ctx);
    this.sleeps.render(ctx);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText(tentPage.current.toString(), 200, 532);
    ctx.restore();
  }
}
