import { PageController } from "../Entitys/pageController";
import { Panel } from "../Entitys/Panel";
import { Pages } from "../Guide/Pages";
import { guidePage } from "../State/GuidePage";

export class GuidePanel extends Panel {
  prevPageController: PageController;
  nextPageController: PageController;
  pages: Pages;
  constructor() {
    super([10, 200], "./Media/Image/UI/Guide-Panel.png", [373, 225]);
    this.prevPageController = new PageController(
      [40, 415],
      "./Media/Image/UI/GuidePrevPage.png",
      -1,
      "GUIDE"
    );
    this.nextPageController = new PageController(
      [370, 413],
      "./Media/Image/UI/GuideNextPage.png",
      1,
      "GUIDE"
    );
    this.pages = new Pages();
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    this.prevPageController.render(ctx);
    this.nextPageController.render(ctx);
    ctx.fillStyle = "black";
    ctx.font = "16px cursive__";
    ctx.fillText(`${guidePage.current.toString()}.`, 28, 230);
    this.pages.render(ctx);
  }
}
