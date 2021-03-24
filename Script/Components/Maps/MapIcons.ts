import { SenceState } from "../State/SenceState";
import { MapIcon } from "./MapIcon";

export class MapIcons {
  _menu: MapIcon;
  home: MapIcon;
  _map: MapIcon;
  river: MapIcon;
  waterfall: MapIcon;
  jungle: MapIcon;
  constructor() {
    this._menu = new MapIcon([0, 0], "", undefined, undefined, undefined, "");
    this.home = new MapIcon(
      [172, 438],
      "./Media/Image/MapIcon/home.png",
      true,
      true,
      SenceState.home,
      "Home"
    );
    this._map = new MapIcon([0, 0], "");
    this.river = new MapIcon(
      [128, 553],
      "./Media/Image/MapIcon/river.png",
      true,
      true,
      SenceState.river,
      "River"
    );
    this.jungle = new MapIcon(
      [102, 245],
      "./Media/Image/MapIcon/jungle.png",
      true,
      true,
      SenceState.jungle,
      "Jungle"
    );
    this.waterfall = new MapIcon(
      [322, 194],
      "./Media/Image/MapIcon/waterfall.png",
      true,
      true,
      SenceState.waterfall,
      "Waterfall"
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.home.render(ctx);
    this.river.render(ctx);
    this.jungle.render(ctx);
    this.waterfall.render(ctx);
  }
}
