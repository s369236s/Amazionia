import { Point2D } from "../Components/Type/Point";

export class Controller {
  static clickPos: Point2D;
  static mousemovePos: Point2D;

  constructor() {
    Controller.clickPos = [0, 0];
    Controller.mousemovePos = [0, 0];
  }
  clickListener(canvas: HTMLCanvasElement) {
    canvas.addEventListener("click", (e) => {
      Controller.clickPos[0] = e.clientX - canvas.getBoundingClientRect().left;
      Controller.clickPos[1] = e.clientY - canvas.getBoundingClientRect().top;
      const [x, y] = Controller.clickPos;
      console.log(`${Math.floor(x)},${Math.floor(y)}`);
    });
  }
  mouseoverListener(canvas: HTMLCanvasElement) {
    canvas.addEventListener("mousemove", (e) => {
      Controller.mousemovePos[0] =
        e.clientX - canvas.getBoundingClientRect().left;
      Controller.mousemovePos[1] =
        e.clientY - canvas.getBoundingClientRect().top;
    });
  }
}
