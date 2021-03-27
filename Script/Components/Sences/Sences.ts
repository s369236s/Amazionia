import { Menu } from "./Menu";
import { Attrs } from "../Attribute/Attrs";
import { Timer } from "../../Controllers/Time";
import { Guide } from "../Entitys/Guide";
import { Home } from "./Home";
import { Map } from "./Map";
import { SenceState } from "../State/SenceState";
import { Waterfall } from "./Waterfall";
import { Jungle } from "./Jungle";
import { River } from "./River";
import { Panels } from "../Panels/Panels";
import { Items } from "../Items/Items";
import Object from "../Entitys/SenceObject";
import { ItemBoxs } from "../Items/ItemBoxs";

export class Sences {
  private attrs: Attrs;
  private timer: Timer;
  private guide: Object;
  private items: Items;
  private panels: Panels;
  private menu: Menu;
  private home: Home;
  private map: Map;
  private river: River;
  private jungle: Jungle;
  private waterfall: Waterfall;
  constructor() {
    this.attrs = new Attrs();
    this.timer = new Timer();
    this.guide = new Guide();
    this.items = new Items();
    this.panels = new Panels(this.items);
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
      this.guide.render(ctx);
      this.panels.render(ctx);
    }
  }
}
