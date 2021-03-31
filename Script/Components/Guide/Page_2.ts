import { Page, String, titlePos } from "./Page";
import Image from "../Entitys/Image";
import { UI } from "../UI/UI";
import { Point2D } from "../Type/Point";
export class Page_2 implements Page {
  title: String;
  article: String[] = [];
  healthIcon: UI;
  articlePos: Point2D[] = [[40, 270]];
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);
    this.healthIcon = new UI(
      112,
      262,
      "./Media/Image/UI/Attr/health.png",
      true,
      "./Media/Image/UI/Attr/health-hover.png"
    );
    this.article.push(
      new String(this.articlePos[1], "Most important", ["16px", "red"])
    );
    this.article.push(new String(this.articlePos[2], "Attribute, If this"));
    this.article.push(new String(this.articlePos[3], "attribute value goes"));
    this.article.push(new String(this.articlePos[4], "0, Game will be over."));
    this.article.push(new String(this.articlePos[5], "If you get some"));
    this.article.push(new String(this.articlePos[6], "illness, health value"));
    this.article.push(new String(this.articlePos[7], "will decrease slowly"));
    this.article.push(new String(this.articlePos[8], "or rapidly, depends"));
    this.article.push(new String(this.articlePos[9], "on what illness you"));
    this.article.push(new String(this.articlePos[10], "get."));
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
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(94, 244, 35, 35);
    ctx.restore();
    this.healthIcon.render(ctx);
    for (const i in this.article) {
      ctx.save();
      ctx.textAlign = "left";
      this.article[i].fillText(ctx);
      ctx.restore();
    }
  }
}
