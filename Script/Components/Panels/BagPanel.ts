import { Entity } from "../Entitys/Entity";
import { Panel } from "../Entitys/Panel";
import { Point2D } from "../Type/Point";
import Image from "../Entitys/Image";
import { Controller } from "../../Controllers/Controller";
import { BagPage } from "../State/BagPage";

class PageController implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  amount: number;
  constructor(pos: Point2D, imageURL: string, amount: number) {
    this.pos = pos;
    this.imageURL = imageURL;
    this.image = new Image(imageURL);
    this.amount = amount;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    if (
      Controller.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
      Controller.mousemovePos[1] >
        this.pos[1] - this.image.element.height / 2 &&
      Controller.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
      Controller.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
    ) {
      ctx.globalAlpha = 0.7;
    } else {
      ctx.globalAlpha = 1;
    }
    if (
      Controller.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
      Controller.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
      Controller.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
      Controller.clickPos[1] < this.pos[1] + this.image.element.height / 2
    ) {
      Controller.clickPos = [0, 0];
      console.log(BagPage.current);
    }
    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    ctx.restore();
  }
}

export class BagPanel extends Panel {
  prevPageController: PageController;
  nextPageController: PageController;
  constructor() {
    super();
    this.prevPageController = new PageController(
      [163, 528],
      "./Media/Image/UI/PrevPage.png",
      -1
    );
    this.nextPageController = new PageController(
      [235, 527],
      "./Media/Image/UI/NextPage.png",
      1
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
