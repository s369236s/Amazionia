import { Canvas, CanvasDetail } from "./Components/Entitys/Canvas";
import { Controller } from "./Controllers/Controller";
import { FpsCounter } from "./Debug/FpsCounter";
import { Time } from "./Controllers/Time";
import { ItemCaller } from "./Debug/ItemCaller";
import { StateSystem } from "./Controllers/StateSystem";
import { GameState } from "./Components/State/GameState";
import { AttrState } from "./Components/State/AttrState";
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
const itemCaller = new ItemCaller();

//------------------------Debug--------------------

window.onload = () => {
  console.log(123);
};

const loop = () => {
  game.render(ctx);
  fpsCounter.render(ctx);
  requestAnimationFrame(loop);
};

setInterval(() => {
  if (Time.minute % 1440 === 0) {
    Time.day++;
  }
  if (GameState.current === GameState.inGame) {
    StateSystem();
    Time.minute++;
  }
}, 500);

loop();
