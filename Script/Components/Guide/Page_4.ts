import { Point2D } from "../Type/Point";
import { UI } from "../UI/UI";
import { Page, String, titlePos } from "./Page";

export class Page_4 implements Page {
  title: String;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 270]];
  thirstyIcon: UI;
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);

    this.thirstyIcon = new UI(
      289,
      373,
      "./Media/Image/UI/Attr/Thirsty-Hover.png",
      false
    );

    this.article.push(new String(this.articlePos[0], "The worst thing is"));
    this.article.push(new String(this.articlePos[1], "don't have any thing"));
    this.article.push(new String(this.articlePos[2], "can drink, If you "));
    this.article.push(new String(this.articlePos[3], "starve , that's fine ,"));
    this.article.push(new String(this.articlePos[4], "but get thirsty,It "));

    this.article.push(new String(this.articlePos[5], "can kill you in 3"));

    this.article.push(new String(this.articlePos[6], "days. So keep liquid"));

    this.article.push(new String(this.articlePos[7], "sufficient is "));

    this.article.push(
      new String(this.articlePos[8], "important", ["24px", "red"])
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
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.title.fillText(ctx);
    this.thirstyIcon.render(ctx);
    for (const i in this.article) {
      ctx.save();
      ctx.textAlign = "left";
      this.article[i].fillText(ctx);
      ctx.restore();
    }
  }
}
