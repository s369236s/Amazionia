import { Entity } from "./Entity";
import { Point2D } from "./Point";

export class Time {
  static day: number;
  static minute: number = 770;
}

export class Timer implements Entity {
  pos: Point2D;
  hour: number;
  minute: number;
  constructor() {
    this.pos = [0, 0];
    // Math.floor((Time.minute % 525, 600));
    // Math.floor((Time.minute % 525, 600) / 1440);
    this.hour = Math.floor(((Time.minute % 525600) % 1440) / 60);
    this.minute = Math.floor((((Time.minute % 525600) % 1440) % 60) / 24);

    // this.minute = Math.floor((Time.minute % 525, 600) % 60);
    // this.hour = Math.floor((Time.minute % 3600) / 3600);
  }
  secondsToString(s: number) {
    this.hour = Math.floor(((s % 525600) % 1440) / 60);
    this.minute = Math.floor(((s % 525600) % 1440) % 60);
    return `${
      this.hour < 10 ? `0${this.hour.toString()}` : this.hour.toString()
    }:${
      this.minute < 10 ? `0${this.minute.toString()}` : this.minute.toString()
    } `;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#47defc";
    ctx.font = "600 30px digital";
    ctx.textAlign = "center";
    ctx.fillText(this.secondsToString(Time.minute), 340, 70);
  }
}
