import { Canvas, CanvasDetail } from "./Components/Entitys/Canvas";
import { Controller } from "./Controllers/Controller";
import { FpsCounter } from "./Debug/FpsCounter";
import { Time } from "./Components/Entitys/Time";
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
CanvasDetail.width = canvas.width;
CanvasDetail.height = canvas.height;
const controller = new Controller();
controller.clickListener(canvas);
controller.mouseoverListener(canvas);
const game = new Canvas();
const fpsCounter = new FpsCounter();
const loop = () => {
  game.render(ctx);
  fpsCounter.render(ctx);
  requestAnimationFrame(loop);
};

setInterval(() => {
  if (Time.minute % 1440 === 0) {
    Time.day++;
  }
  Time.minute++;
}, 500);

loop();
