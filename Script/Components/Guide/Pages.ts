import { guidePage } from "../State/GuidePage";
import { Page } from "./Page";
import { Page_1 } from "./Page_1";
import { Page_2 } from "./Page_2";

export class Pages {
  pages: Page[] = [];
  constructor() {
    this.pages.push(new Page_1("How to survive"));
    this.pages.push(new Page_2("Health"));
  }
  render(ctx: CanvasRenderingContext2D) {
    this.pages[guidePage.current - 1].render(ctx);
  }
}
