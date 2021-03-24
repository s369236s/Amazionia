import { Canvas, CanvasDetail } from "./Components/Entitys/Canvas";
import { Controller } from "./Controllers/Controller";
import { FpsCounter } from "./Debug/FpsCounter";
import { Time } from "./Controllers/Time";
import { ItemCaller } from "./Debug/ItemCaller";
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
CanvasDetail.width = canvas.width;
CanvasDetail.height = canvas.height;
const controller = new Controller();
controller.clickListener(canvas);
controller.mouseoverListener(canvas);
const game = new Canvas();

//------------------------Debug--------------------

const fpsCounter = new FpsCounter();
// const itemCaller = new ItemCaller();

//------------------------Debug--------------------

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
