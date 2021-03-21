import { Background } from "../Background";
import { Sence } from "../Sence";
import { MapIcons } from "../MapIcons";
import { Entity } from "../Entity";
import { Point2D } from "../Point";
import { MapState } from "../MapState";
import Image from "../Image";

export class Map implements Sence {
  background: Background;
  private mapIcons: MapIcons;
  private redDot: RedDot;
  constructor() {
    this.background = new Background(0, 0, "./Media/Image/Backgrounds/Map.png");
    this.mapIcons = new MapIcons();
    this.redDot = new RedDot(100, 100);
  }
  render(ctx: CanvasRenderingContext2D): void {
    this.background.render(ctx);
    this.mapIcons.render(ctx);
    this.redDot.render(ctx);
  }
}

class RedDot implements Entity {
  pos: Point2D;
  image: Image;
  constructor(x: number, y: number) {
    this.pos = [x, y];
    this.image = new Image("./Media/Image/UI/red-dot.png");
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image.element,
      MapState.mapPos[MapState.current][0],
      MapState.mapPos[MapState.current][1]
    );
  }
}
