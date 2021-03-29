import { Panel } from "../Entitys/Panel";
import { BagPage } from "../State/BagPage";
import { Item } from "../Items/Item";
import { ItemID } from "../Items/Items";
import { PageController } from "../Entitys/pageController";

export const itemInfoBox = {
  current: 0,
  none: 0,
  opened: 1,
  item: new Item(
    "Coconut",
    "./Media/Image/Items/Coconut.png",
    ItemID.food.coconut,
    "A Coconut",
    true,
    [0, 10, 20, 0]
  ),
};

export class BagPanel extends Panel {
  prevPageController: PageController;
  nextPageController: PageController;
  constructor() {
    super();
    this.prevPageController = new PageController(
      [163, 528],
      "./Media/Image/UI/PrevPage.png",
      -1,
      "BAG"
    );
    this.nextPageController = new PageController(
      [235, 527],
      "./Media/Image/UI/NextPage.png",
      1,
      "BAG"
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    this.prevPageController.render(ctx);
    this.nextPageController.render(ctx);
    ctx.fillStyle = "black";
    ctx.fillText(BagPage.current.toString(), 200, 532);
  }
}
