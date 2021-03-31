import { Controller } from "../../Controllers/Controller";
import { itemInfoBox } from "../Panels/BagPanel";
import { FirePage } from "../Panels/FirePanel";
import { BagPage } from "../State/BagPage";
import { guidePage } from "../State/GuidePage";
import { Point2D } from "../Type/Point";
import { Entity } from "./Entity";
import Image from "./Image";

export class PageController implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  amount: number;
  pageControllTarget: string;
  constructor(
    pos: Point2D,
    imageURL: string,
    amount: number,
    pageControllTarget: string //uppercase
  ) {
    this.pos = pos;
    this.imageURL = imageURL;
    this.image = new Image(imageURL);
    this.amount = amount;
    this.pageControllTarget = pageControllTarget;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    if (itemInfoBox.current === itemInfoBox.none) {
      if (
        Controller.mousemovePos[0] >
          this.pos[0] - this.image.element.width / 2 &&
        Controller.mousemovePos[1] >
          this.pos[1] - this.image.element.height / 2 &&
        Controller.mousemovePos[0] <
          this.pos[0] + this.image.element.width / 2 &&
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
        if (this.pageControllTarget === "BAG") {
          if (
            BagPage.current + this.amount != 0 &&
            BagPage.current + this.amount != BagPage.maxPage
          ) {
            BagPage.current += this.amount;
          }
        }
        if (this.pageControllTarget === "GUIDE") {
          if (
            guidePage.current + this.amount != 0 &&
            guidePage.current + this.amount != guidePage.maxPage
          ) {
            guidePage.current += this.amount;
          }
        }
        if (this.pageControllTarget === "FIRE") {
          if (
            FirePage.current + this.amount != 0 &&
            FirePage.current + this.amount != FirePage.maxPage
          ) {
            FirePage.current += this.amount;
          }
        }

        Controller.clickPos = [0, 0];
      }
    }

    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    ctx.restore();
  }
}
