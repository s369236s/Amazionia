import { Point2D } from "../Type/Point";
import { Page, String, titlePos } from "./Page";

export class Page_1 implements Page {
  title: String;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 266]];
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);
    this.article.push(new String(this.articlePos[0], "1. Don't starve."));
    this.article.push(new String(this.articlePos[1], "2. Consume drinkable"));
    this.article.push(new String(this.articlePos[2], "liquid."));
    this.article.push(new String(this.articlePos[3], "3. Don't put anything."));
    this.article.push(new String(this.articlePos[4], "in your mouth."));
    this.article.push(new String(this.articlePos[5], "3. Don't get sick."));
    this.article.push(new String(this.articlePos[6], "4. Stay positive."));
    this.article.push(new String(this.articlePos[7], "5. Aware of Beast."));
    this.article.push(
      new String(this.articlePos[8], "6. Can't Go out of your")
    );
    this.article.push(new String(this.articlePos[9], "camp at night."));
    this.article.push(
      new String(
        [this.articlePos[10][0], this.articlePos[10][1]],
        "Important!",
        ["20px", "red"]
      )
    );
    this.article.push(
      new String(
        [this.articlePos[11][0] + 15, this.articlePos[11][1]],
        "Don't Die!",
        ["22px", "red"]
      )
    );
  }

  calArticlePos() {
    for (let i = 0; i < 4; i++) {
      this.articlePos.push([this.articlePos[i][0], this.articlePos[i][1] + 30]);
    }
    this.articlePos.push([this.articlePos[4][0] + 180, 236]); //reset right side text position of the page
    for (let i = 5; i < 11; i++) {
      this.articlePos.push([this.articlePos[i][0], this.articlePos[i][1] + 30]);
    }
    // console.log(this.articlePos);
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
