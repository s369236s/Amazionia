import { Menu } from "./Sences/Menu";
import { Attrs } from "./Attrs";
import { Timer } from "./Time";
import { Home } from "./Sences/Home";
import { Map } from "./Sences/Map";
import { SenceState } from "./SenceState";
import { Waterfall } from "./Sences/Waterfall";
import { Jungle } from "./Sences/Jungle";
import { River } from "./Sences/River";

export class Sences {
  private attrs: Attrs;
  private timer: Timer;
  private menu: Menu;
  private home: Home;
  private map: Map;
  private river: River;
  private jungle: Jungle;
  private waterfall: Waterfall;
  constructor() {
    this.attrs = new Attrs();
    this.timer = new Timer();
    this.menu = new Menu();
    this.home = new Home();
    this.map = new Map();
    this.river = new River();
    this.jungle = new Jungle();
    this.waterfall = new Waterfall();
  }
  render(ctx: CanvasRenderingContext2D) {
    if (SenceState.current === SenceState.menu) {
      this.menu.render(ctx);
    }
    if (SenceState.current === SenceState.home) {
      this.home.render(ctx);
    }
    if (SenceState.current === SenceState.map) {
      this.map.render(ctx);
    }
    if (SenceState.current === SenceState.river) {
      this.river.render(ctx);
    }
    if (SenceState.current === SenceState.jungle) {
      this.jungle.render(ctx);
    }
    if (SenceState.current === SenceState.waterfall) {
      this.waterfall.render(ctx);
    }
    if (SenceState.current !== SenceState.menu) {
      this.attrs.render(ctx);
      this.timer.render(ctx);
    }
  }
}
