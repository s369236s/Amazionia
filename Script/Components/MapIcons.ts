import { MapIcon } from "./MapIcon";

export class MapIcons {
  _menu: MapIcon;
  home: MapIcon;
  _map: MapIcon;
  river: MapIcon;
  waterfall: MapIcon;
  jungle: MapIcon;
  constructor() {
    this._menu = new MapIcon(0, 0, "");
    this.home = new MapIcon(
      172,
      438,
      "./Media/Image/MapIcon/home.png",
      true,
      true,
      1
    );
    this._map = new MapIcon(0, 0, "");
    this.river = new MapIcon(
      128,
      553,
      "./Media/Image/MapIcon/river.png",
      true,
      true,
      3
    );
    this.jungle = new MapIcon(
      102,
      245,
      "./Media/Image/MapIcon/jungle.png",
      true,
      true,
      4
    );
    this.waterfall = new MapIcon(
      326,
      162,
      "./Media/Image/MapIcon/waterfall.png",
      true,
      true,
      5
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    this.home.render(ctx);
    this.river.render(ctx);
    this.jungle.render(ctx);
    this.waterfall.render(ctx);
  }
}
