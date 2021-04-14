import { Point2D } from "../Type/Point";
import { UI } from "../UI/UI";
import { Page, String, titlePos } from "./Page";

export class Page_5 implements Page {
  title: String;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 270]];
  mentalIcon: UI;
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);

    this.mentalIcon = new UI(
      289,
      373,
      "./Media/Image/UI/Attr/Mentality-Hover.png",
      false
    );

    this.article.push(new String(this.articlePos[0], "A person who tries"));
    this.article.push(new String(this.articlePos[1], "to surivie in the"));
    this.article.push(new String(this.articlePos[2], "rainforest, keep"));
    this.article.push(new String(this.articlePos[3], "positive can make"));
    this.article.push(new String(this.articlePos[4], "things more easier."));

    this.article.push(new String(this.articlePos[5], "If your mentality"));

    this.article.push(new String(this.articlePos[6], "value is low"));

    this.article.push(new String(this.articlePos[7], "other attrbuite will"));
    this.article.push(new String(this.articlePos[8], "decrease faster"));
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
    this.mentalIcon.render(ctx);
    for (const i in this.article) {
      ctx.save();
      ctx.textAlign = "left";
      this.article[i].fillText(ctx);
      ctx.restore();
    }
  }
}
