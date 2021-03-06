import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { itemInfoBox } from "../Panels/BagPanel";
import { Controller } from "../../Controllers/Controller";
import { deleteItem, refreshItemBoxs } from "./ItemSystem";
import Image from "../Entitys/Image";
import { AttrState } from "../State/AttrState";

class InfoXButton implements Entity {
  pos: Point2D;
  image: Image;
  imageURL: string;
  constructor(pos: Point2D, imageURL: string) {
    this.pos = pos;
    this.image = new Image(imageURL);
    this.imageURL = imageURL;
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
      itemInfoBox.current = itemInfoBox.none;
    }
    ctx.drawImage(
      this.image.element,
      this.pos[0] - this.image.element.width / 2,
      this.pos[1] - this.image.element.height / 2
    );
    ctx.restore();
  }
}

export class ItemInfo {
  image: Image;
  xButton: InfoXButton;
  isPreview: boolean;
  constructor(isPreview: boolean = false) {
    this.image = itemInfoBox.item.image;
    this.isPreview = isPreview;
    this.xButton = new InfoXButton([295, 243], "./Media/Image/UI/x.png");
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(85, 220, 230, 270);
    ctx.drawImage(itemInfoBox.item.image.element, 120, 250, 150, 150);
    ctx.fillStyle = "white";
    ctx.fillText(itemInfoBox.item.text, 198, 432);
    ctx.fillText(itemInfoBox.item.name, 197, 239);
    if (!this.isPreview) {
      ctx.fillStyle = itemInfoBox.item.consumable === true ? "green" : "grey";
      ctx.fillRect(156, 457, 40, 20);
      ctx.fillStyle = "red";
      ctx.fillRect(206, 457.5, 40, 19.5);

      ctx.font = "14px Poppins";
      ctx.fillStyle = "white";
      ctx.fillText("eat", 176, 472);
      ctx.fillText("drop", 226, 472);

      if (
        Controller.mousemovePos[0] > 156 &&
        Controller.mousemovePos[1] > 457 &&
        Controller.mousemovePos[0] < 196 &&
        Controller.mousemovePos[1] < 477 &&
        itemInfoBox.item.consumable === true
      ) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(156, 457, 40, 20);
      }
      if (
        Controller.clickPos[0] > 156 &&
        Controller.clickPos[1] > 457 &&
        Controller.clickPos[0] < 196 &&
        Controller.clickPos[1] < 477 &&
        itemInfoBox.item.consumable === true
      ) {
        deleteItem(itemInfoBox.item);
        this.recoverAttr();
        refreshItemBoxs();
        itemInfoBox.current = itemInfoBox.none;
      }
      if (
        Controller.mousemovePos[0] > 206 &&
        Controller.mousemovePos[1] > 457.5 &&
        Controller.mousemovePos[0] < 246 &&
        Controller.mousemovePos[1] < 477.5
      ) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.fillRect(206, 457.5, 40, 20);
      }
      if (
        Controller.clickPos[0] > 206 &&
        Controller.clickPos[1] > 457.5 &&
        Controller.clickPos[0] < 246 &&
        Controller.clickPos[1] < 477.5
      ) {
        deleteItem(itemInfoBox.item);
        refreshItemBoxs();
        itemInfoBox.current = itemInfoBox.none;
      }
    }
    ctx.restore();
    this.xButton.render(ctx);
  }
  recoverAttr() {
    const newAttrState = [
      AttrState.health,
      AttrState.hunger,
      AttrState.thirsty,
      AttrState.mentality,
    ];
    const recovery = [
      (newAttrState[0] +=
        itemInfoBox.item.attrValue[0] * AttrState.mentalityRate),
      (newAttrState[1] +=
        itemInfoBox.item.attrValue[1] * AttrState.mentalityRate),
      (newAttrState[2] +=
        itemInfoBox.item.attrValue[2] * AttrState.mentalityRate),
      (newAttrState[3] +=
        itemInfoBox.item.attrValue[3] * AttrState.mentalityRate),
    ];

    if (recovery[0] >= 100) AttrState.health = 100;
    else
      AttrState.health +=
        itemInfoBox.item.attrValue[0] * AttrState.mentalityRate;

    if (recovery[1] >= 100) AttrState.hunger = 100;
    else
      AttrState.hunger +=
        itemInfoBox.item.attrValue[1] * AttrState.mentalityRate;

    if (recovery[2] >= 100) AttrState.thirsty = 100;
    else
      AttrState.thirsty +=
        itemInfoBox.item.attrValue[2] * AttrState.mentalityRate;
    if (recovery[3] >= 100) AttrState.mentality = 100;
    else
      AttrState.mentality +=
        itemInfoBox.item.attrValue[3] * AttrState.mentalityRate;
  }
}
