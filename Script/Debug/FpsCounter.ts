export class FpsCounter {
  fps: number;
  times: number[];
  constructor() {
    this.fps = 0;
    this.times = [];
  }
  render(ctx: CanvasRenderingContext2D) {
    const now: number = performance.now();
    while (this.times.length > 0 && this.times[0] <= now - 1000) {
      this.times.shift();
    }
    this.times.push(now);
    this.fps = this.times.length;
    ctx.textAlign = "center";
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#F3FF0F";
    ctx.fillText(this.fps.toString(), 20, 20);
  }
}
