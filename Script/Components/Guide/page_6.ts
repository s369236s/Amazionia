import { Point2D } from "../Type/Point";
import { Page, String, titlePos } from "./Page";
import Image from "../Entitys/Image";
export class Page_6 implements Page {
  title: String;
  article: String[] = [];
  articlePos: Point2D[] = [[40, 266]];
  mapIcon: Image[] = [];
  constructor(title: string) {
    this.calArticlePos();
    this.title = new String(titlePos, title, ["20px", "black"]);
    this.article.push(new String(this.articlePos[0], "You can visit every"));
    this.article.push(new String(this.articlePos[1], "spot on the map ,"));
    this.article.push(new String(this.articlePos[2], "BUT CARE FOR ---"));
    this.article.push(new String(this.articlePos[3], "It takes TIME and"));
    this.article.push(new String(this.articlePos[4], "ENERGY to TRVEAL!!"));
    this.article.push(
      new String(this.articlePos[6], "HOME  RIVER", ["20px", "red"])
    );
    this.article.push(
      new String(this.articlePos[8], "JUNGLE  FALL", ["20px", "red"])
    );
    this.mapIcon.push(new Image("./Media/Image/MapIcon/Home.png"));
    this.mapIcon.push(new Image("./Media/Image/MapIcon/River.png"));
    this.mapIcon.push(new Image("./Media/Image/MapIcon/Jungle.png"));
    this.mapIcon.push(new Image("./Media/Image/MapIcon/Waterfall.png"));
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
    ctx.drawImage(this.mapIcon[0].element, 232, 267);
    ctx.drawImage(this.mapIcon[1].element, 315, 267);
    ctx.drawImage(this.mapIcon[2].element, 240, 335);
    ctx.drawImage(this.mapIcon[3].element, 332, 335);
  }
}
