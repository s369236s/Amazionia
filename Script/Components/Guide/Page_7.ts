import { Point2D } from "../Type/Point";
import { Page, String, titlePos } from "./Page";

export class Page_7 implements Page {
  title: String;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 266]];
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);
    this.article.push(new String(this.articlePos[0], "test test"));
  }

  calArticlePos() {
    for (let i = 0; i < 4; i++) {
      this.articlePos.push([this.articlePos[i][0], this.articlePos[i][1] + 30]);
    }
    this.articlePos.push([this.articlePos[4][0] + 180, 236]); //reset right side text position of the page
    for (let i = 5; i < 11; i++) {
      this.articlePos.push([this.articlePos[i][0], this.articlePos[i][1] + 30]);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.title.fillText(ctx);
    for (const i in this.article) {
      ctx.save();
      ctx.textAlign = "left";
      this.article[i].fillText(ctx);
      ctx.restore();
    }
  }
}
