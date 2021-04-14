import { Point2D } from "../Type/Point";
import { UI } from "../UI/UI";
import { Page, String, titlePos } from "./Page";

export class Page_3 implements Page {
  title: String;
  hungerIcon: UI;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 270]];

  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);
    this.hungerIcon = new UI(
      112,
      262,
      "./Media/Image/UI/Attr/Hunger.png",
      true,
      "./Media/Image/UI/Attr/Hunger-Hover.png"
    );

    this.article.push(new String(this.articlePos[2], "Starving can make"));
    this.article.push(new String(this.articlePos[3], "mentality and health"));
    this.article.push(new String(this.articlePos[4], "value decrease,"));
    this.article.push(new String(this.articlePos[5], "even get sick."));
    this.article.push(new String(this.articlePos[6], "No matter how hungry "));
    this.article.push(new String(this.articlePos[7], "you are, don't eat"));
    this.article.push(new String(this.articlePos[8], "unknown things in"));
    this.article.push(new String(this.articlePos[9], "the rainforest."));
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
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(94, 244, 35, 35);
    ctx.restore();
    this.hungerIcon.render(ctx);
    for (const i in this.article) {
      ctx.save();
      ctx.textAlign = "left";
      this.article[i].fillText(ctx);
      ctx.restore();
    }
  }
}
