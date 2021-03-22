import { Entity } from "./Entity";
import { Point2D } from "../Type/Point";
import Image from "./Image";
export class Time {
  static day: number = 0;
  static minute: number = 1430;
}

export class Timer implements Entity {
  pos: Point2D;
  hour: number;
  minute: number;
  day: number;
  image!: Image;
  imageURL!: string;
  constructor() {
    this.pos = [0, 0];
    this.day = Time.day;
    this.hour = Math.floor(((Time.minute % 525600) % 1440) / 60);
    this.minute = Math.floor((((Time.minute % 525600) % 1440) % 60) / 24);
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
    ctx.save();
    ctx.fillStyle = "#47defc";
    ctx.font = "600 30px digital";
    ctx.textAlign = "center";
    ctx.fillText(this.secondsToString(Time.minute), 350, 65);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "15px Poppins";
    ctx.textAlign = "center";
    ctx.fillText(`Day : ${Time.day.toString()}`, 367.5, 80);
    ctx.restore();
  }
}
