import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";
import { PanelState } from "../State/PanelState";
import { SenceState } from "../State/SenceState";
import Object from "../Entitys/SenceObject";

export class Home implements Sence {
  background: Background;
  tent: Object;
  bag: Object;
  fire: Object;
  leaveArrow: Object;
  constructor() {
    this.background = new Background(
      0,
      0,
      "./Media/Image/Backgrounds/home.png"
    );
    this.tent = new Object(
      80,
      465,
      "./Media/Image/SenceObjects/tent.png",
      true,
      undefined,
      true,
      PanelState.tent
    );
    this.fire = new Object(
      190,
      540,
      "./Media/Image/SenceObjects/fire.png",
      true,
      undefined,
      true,
      PanelState.fire
    );
    this.bag = new Object(
      350,
      445,
      "./Media/Image/SenceObjects/bag.png",
      true,
      undefined,
      true,
      PanelState.bag
    );
    this.leaveArrow = new Object(
      70,
      220,
      "./Media/Image/UI/Leave-Arrow.png",
      true,
      undefined,
      undefined,
      undefined,
      true,
      SenceState.map
    );
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.fire.render(ctx);
    this.tent.render(ctx);
    this.leaveArrow.render(ctx);
    this.bag.render(ctx);
  }
}
