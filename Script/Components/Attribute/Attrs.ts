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
      "./Media/Image/UI/Attr/health.png",
      100,
      true,
      "./Media/Image/UI/Attr/health-hover.png"
    );
    this.hunger = new Attr(
      100,
      60,
      "./Media/Image/UI/Attr/hunger.png",
      100,
      true,
      "./Media/Image/UI/Attr/hunger-hover.png"
    );
    this.thirsty = new Attr(
      170,
      60,
      "./Media/Image/UI/Attr/thirsty.png",
      100,
      true,
      "./Media/Image/UI/Attr/thirsty-hover.png"
    );
    this.mentality = new Attr(
      240,
      60,
      "./Media/Image/UI/Attr/mentality.png",
      100,
      true,
      "./Media/Image/UI/Attr/mentality-hover.png"
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.health.render(ctx);
    this.hunger.render(ctx);
    this.thirsty.render(ctx);
    this.mentality.render(ctx);
  }
}
