import { AttrState } from "../State/AttrState";
import { Attr } from "./Attr";
export class Attrs {
  health: Attr;
  hunger: Attr;
  thirsty: Attr;
  mentality: Attr;

  constructor() {
    this.health = new Attr(
      30,
      60,
      "./Media/Image/UI/Attr/Health.png",
      Math.floor(AttrState.health),
      true,
      "./Media/Image/UI/Attr/Health-Hover.png"
    );
    this.hunger = new Attr(
      100,
      60,
      "./Media/Image/UI/Attr/Hunger.png",
      Math.floor(AttrState.hunger),
      true,
      "./Media/Image/UI/Attr/Hunger-Hover.png"
    );
    this.thirsty = new Attr(
      170,
      60,
      "./Media/Image/UI/Attr/Thirsty.png",
      Math.floor(AttrState.thirsty),
      true,
      "./Media/Image/UI/Attr/Thirsty-Hover.png"
    );
    this.mentality = new Attr(
      240,
      60,
      "./Media/Image/UI/Attr/Mentality.png",
      Math.floor(AttrState.mentality),
      true,
      "./Media/Image/UI/Attr/Mentality-Hover.png"
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.health.render(ctx, Math.floor(AttrState.health));
    this.hunger.render(ctx, Math.floor(AttrState.hunger));
    this.thirsty.render(ctx, Math.floor(AttrState.thirsty));
    this.mentality.render(ctx, Math.floor(AttrState.mentality));
  }
}
