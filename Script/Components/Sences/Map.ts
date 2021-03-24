import { Background } from "../Entitys/Background";
import { Sence } from "../Entitys/Sence";
import { MapIcons } from "../Maps/MapIcons";
import { Entity } from "../Entitys/Entity";
import { Point2D } from "../Type/Point";
import { MapState } from "../State/MapState";
import Image from "../Entitys/Image";

export class Map implements Sence {
  background: Background;
  private mapIcons: MapIcons;
  private redDot: RedDot;
  constructor() {
    this.background = new Background(0, 0, "./Media/Image/Backgrounds/map.png");
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
  imageURL: string = "./Media/Image/UI/red-dot.png";
  constructor(x: number, y: number) {
    this.pos = [x, y];
    this.image = new Image(this.imageURL);
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image.element,
      MapState.mapPos[MapState.current][0],
      MapState.mapPos[MapState.current][1]
    );
  }
}
