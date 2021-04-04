export const itemPop = {
  isPop: false,
  itemName: "",
  amount: -1,
};

export class Pop {
  constructor() {}
  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "16px poppins";
    ctx.fillStyle = "black";
    ctx.fillRect(110, 532, 175, 25);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    if (itemPop.itemName !== "fail") {
      ctx.fillText(itemPop.itemName, 180, 550);
      ctx.fillText(
        itemPop.amount > 0 ? `+${itemPop.amount}` : `${itemPop.amount}`,
        250,
        550
      );
    } else {
      ctx.fillText(itemPop.itemName, 180, 550);
    }

    ctx.restore();
  }
}
