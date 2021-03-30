import { guidePage } from "../State/GuidePage";
import { Page } from "./Page";
import { Page_1 } from "./Page_1";
import { Page_2 } from "./Page_2";
import { Page_3 } from "./Page_3";
import { Page_4 } from "./Page_4";
import { Page_5 } from "./Page_5";

export class Pages {
  pages: Page[] = [];
  constructor() {
    this.pages.push(new Page_1("How to survive"));
    this.pages.push(new Page_2("Health"));
    this.pages.push(new Page_3("Hunger"));
    this.pages.push(new Page_4("Thirsty"));
    this.pages.push(new Page_5("Mentality"));
  }
  render(ctx: CanvasRenderingContext2D) {
    this.pages[guidePage.current - 1].render(ctx);
  }
}
