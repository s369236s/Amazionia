(() => {
  "use strict";
  class e {
    constructor(e) {
      (this.element = new Image()), (this.element.src = e);
    }
  }
  class t {
    constructor(t, s, i) {
      (this.image = new e(i)), (this.pos = [t, s]);
    }
    render(e) {
      e.drawImage(this.image.element, this.pos[0], this.pos[1]);
    }
  }
  class s {
    constructor() {
      (this.stringPos = []),
        (this.background = new t(0, 0, "./Media/Image/Backgrounds/menu.png")),
        this.stringPos.push([Ae.width / 2, Ae.height / 2]),
        this.stringPos.push([Ae.width / 2, Ae.height / 2 + 30]),
        this.stringPos.push([Ae.width / 2, Ae.height / 2 + 500]);
    }
    render(e) {
      this.background.render(e),
        (e.fillStyle = "black"),
        e.fillRect(0, 0, Ae.width, Ae.height),
        (e.font = "30px poppins"),
        (e.fillStyle = "white"),
        (e.textAlign = "center"),
        e.fillText(
          "Game Over",
          this.stringPos[0][0],
          (this.stringPos[0][1] -= 0.5)
        ),
        (e.font = "20px poppins"),
        e.fillText(
          "You are dead",
          this.stringPos[1][0],
          (this.stringPos[1][1] -= 0.5)
        ),
        e.fillText(
          "Made by Allen Deng",
          this.stringPos[2][0],
          (this.stringPos[2][1] -= 0.5)
        );
    }
  }
  class i {
    constructor() {
      (i.clickPos = [0, 0]), (i.mousemovePos = [0, 0]);
    }
    clickListener(e) {
      e.addEventListener("click", (t) => {
        i.clickPos = [
          t.clientX - e.getBoundingClientRect().left,
          t.clientY - e.getBoundingClientRect().top,
        ];
        const [s, o] = i.clickPos;
        console.log(`${Math.floor(s)},${Math.floor(o)}`);
      });
    }
    mouseoverListener(e) {
      e.addEventListener("mousemove", (t) => {
        (i.mousemovePos[0] = t.clientX - e.getBoundingClientRect().left),
          (i.mousemovePos[1] = t.clientY - e.getBoundingClientRect().top);
      });
    }
  }
  class o {}
  (o.current = 0),
    (o.menu = 0),
    (o.home = 1),
    (o.map = 2),
    (o.river = 3),
    (o.jungle = 4),
    (o.waterfall = 5);
  const h = { current: 0, none: 0, inGame: 1, over: 2, end: 3 };
  class n {}
  (n.current = 0),
    (n.none = 0),
    (n.guide = 1),
    (n.bag = 2),
    (n.tent = 3),
    (n.fire = 4),
    (n.item = 100);
  class r {
    constructor(
      t,
      s,
      i,
      o = !1,
      h = "",
      n = !1,
      r = 99,
      a = !1,
      l = !1,
      c = 99
    ) {
      (this.image = new e(i)),
        (this.imageURL = i),
        (this.image.element.src = i),
        (this.isHoverAble = o),
        (this.isChangeSenceAble = n),
        (this.gotoSence = r),
        (this.imageHoverURL = h),
        (this.pos = [t, s]),
        (this._b = a),
        (this.isOpenPanel = l),
        (this.panelTarget = c);
    }
    render(e) {
      e.drawImage(
        this.image.element,
        this.pos[0] - this.image.element.width / 2,
        this.pos[1] - this.image.element.height / 2
      ),
        this.isHoverAble &&
          n.current === n.none &&
          (i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
            ? (this.image.element.src = this.imageHoverURL)
            : (this.image.element.src = this.imageURL)),
        this.isChangeSenceAble &&
          i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
          ((o.current = this.gotoSence),
          this._b && (h.current = h.inGame),
          (i.clickPos = [0, 0])),
        this.isOpenPanel &&
          n.current === n.none &&
          i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
          ((n.current = this.panelTarget), (i.clickPos = [0, 0]));
    }
  }
  class a {
    constructor() {
      (this.background = new t(0, 0, "./Media/Image/Backgrounds/menu.png")),
        (this.startButton = new r(
          Ae.width / 2,
          Ae.height / 2,
          "./Media/Image/UI/Button/New-Game-Button.png",
          !0,
          "./Media/Image/UI/Button/New-Game-Button-Hover.png",
          !0,
          1,
          !0
        ));
    }
    render(e) {
      this.background.render(e), this.startButton.render(e);
    }
  }
  class l {}
  (l.health = 100),
    (l.hunger = 100),
    (l.mentality = 100),
    (l.thirsty = 100),
    (l.mentalityRate = 1);
  class c {
    constructor(t, s, i, o, h, n) {
      (this.pos = [t, s]),
        (this.imageURL = i),
        (this.attrValue = o),
        (this.isHoverAble = h),
        (this.imageHoverURL = n),
        (this.image = new e(i));
    }
    render(e, t = 0) {
      e.drawImage(
        this.image.element,
        this.pos[0] - this.image.element.width / 2,
        this.pos[1] - this.image.element.height / 2
      ),
        (e.fillStyle = "white"),
        (e.font = "16px Poppins"),
        (e.textAlign = "center"),
        e.fillText(
          t.toString(),
          this.image.element.width +
            this.pos[0] -
            this.image.element.width / 2 +
            15,
          60
        ),
        this.isHoverAble &&
          (i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
            ? (this.image.element.src = this.imageHoverURL)
            : (this.image.element.src = this.imageURL));
    }
  }
  class m {
    constructor() {
      (this.health = new c(
        30,
        60,
        "./Media/Image/UI/Attr/health.png",
        Math.floor(l.health),
        !0,
        "./Media/Image/UI/Attr/health-hover.png"
      )),
        (this.hunger = new c(
          100,
          60,
          "./Media/Image/UI/Attr/hunger.png",
          Math.floor(l.hunger),
          !0,
          "./Media/Image/UI/Attr/hunger-hover.png"
        )),
        (this.thirsty = new c(
          170,
          60,
          "./Media/Image/UI/Attr/thirsty.png",
          Math.floor(l.thirsty),
          !0,
          "./Media/Image/UI/Attr/thirsty-hover.png"
        )),
        (this.mentality = new c(
          240,
          60,
          "./Media/Image/UI/Attr/mentality.png",
          Math.floor(l.mentality),
          !0,
          "./Media/Image/UI/Attr/mentality-hover.png"
        ));
    }
    render(e) {
      this.health.render(e, Math.floor(l.health)),
        this.hunger.render(e, Math.floor(l.hunger)),
        this.thirsty.render(e, Math.floor(l.thirsty)),
        this.mentality.render(e, Math.floor(l.mentality));
    }
  }
  class p {}
  (p.day = 0), (p.minute = 1430);
  class g {
    constructor() {
      (this.pos = [0, 0]),
        (this.day = p.day),
        (this.hour = Math.floor(((p.minute % 525600) % 1440) / 60)),
        (this.minute = Math.floor((((p.minute % 525600) % 1440) % 60) / 24));
    }
    secondsToString(e) {
      return (
        (this.hour = Math.floor(((e % 525600) % 1440) / 60)),
        (this.minute = Math.floor(((e % 525600) % 1440) % 60)),
        `${
          this.hour < 10 ? `0${this.hour.toString()}` : this.hour.toString()
        }:${
          this.minute < 10
            ? `0${this.minute.toString()}`
            : this.minute.toString()
        } `
      );
    }
    render(e) {
      e.save(),
        (e.fillStyle = "#47defc"),
        (e.font = "600 30px digital"),
        (e.textAlign = "center"),
        e.fillText(this.secondsToString(p.minute), 350, 65),
        e.restore(),
        e.save(),
        (e.fillStyle = "white"),
        (e.font = "15px Poppins"),
        (e.textAlign = "center"),
        e.fillText(`Day : ${p.day.toString()}`, 367.5, 80),
        e.restore();
    }
  }
  class u {
    constructor(
      t = [50, 150],
      s = "./Media/Image/UI/Panel.png",
      i = !0,
      o = [320, 175]
    ) {
      (this.xImageURL = "./Media/Image/UI/x.png"),
        (this.pos = [t[0], t[1]]),
        (this.imageURL = s),
        (this.image = new e(s)),
        (this.customXPos = o),
        (this._b = i),
        (this.xButton = new z(
          o[0],
          o[1],
          this.xImageURL,
          !0,
          "",
          !0,
          n.none,
          !1,
          void 0,
          "x"
        ));
    }
    render(e) {
      e.drawImage(this.image.element, this.pos[0], this.pos[1]),
        this._b && this.xButton.render(e);
    }
  }
  class d {}
  (d.current = 1), (d.maxPage = 4);
  class P {
    constructor(t, s, i, o = "", h = !1, n = [0, 0, 0, 0], r = 10) {
      (this.amount = 1),
        (this.text = o),
        (this.consumable = h),
        (this.attrValue = n),
        (this.name = t),
        (this.imageURL = s),
        (this.ID = i),
        (this.maxAmount = r),
        (this.image = new e(s));
    }
  }
  class w {
    constructor() {
      (this.items = []),
        this.items.push(
          new P(
            "Banana",
            "./Media/Image/Items/Banana.png",
            y.food.banana,
            "A Banana",
            !0,
            [0, 10, 5, 0]
          )
        ),
        this.items.push(
          new P(
            "Coconut",
            "./Media/Image/Items/Coconut.png",
            y.food.coconut,
            "A Coconut",
            !0,
            [0, 10, 20, 0]
          )
        ),
        this.items.push(
          new P(
            "Berry",
            "./Media/Image/Items/Berry.png",
            y.food.berry,
            "A Berry",
            !0,
            [0, 5, 5, 0]
          )
        ),
        this.items.push(
          new P(
            "Fish",
            "./Media/Image/Items/Fish.png",
            y.food.fish,
            "A Fish",
            !0,
            [0, 5, 5, 0]
          )
        ),
        this.items.push(
          new P(
            "Spider",
            "./Media/Image/Items/spider.png",
            y.food.spider,
            "Look gross...",
            !0,
            [5, 5, 0, -20],
            10
          )
        ),
        this.items.push(
          new P(
            "Snail",
            "./Media/Image/Items/snail.png",
            y.food.snail,
            "Feel sticky",
            !0,
            [0, 0, 0, -5],
            10
          )
        ),
        this.items.push(
          new P(
            "Fresh Water",
            "./Media/Image/Items/water_skin.png",
            y.food.freshWater,
            "the most important thing",
            !0,
            [0, 0, 25, 0],
            15
          )
        );
    }
  }
  class f {
    constructor() {
      (this.items = []),
        this.items.push(
          new P(
            "Cooked Fish",
            "./Media/Image/Items/fish-cooked.png",
            y.cooked_Food.fish_Cooked,
            "Protein rich...",
            !0,
            [15, 25, 0, 10],
            10
          )
        ),
        this.items.push(
          new P(
            "Cooked Spider",
            "./Media/Image/Items/spider-cooked.png",
            y.cooked_Food.spider_Cooked,
            "Protein rich...",
            !0,
            [10, 10, 0, -5],
            10
          )
        ),
        this.items.push(
          new P(
            "Cooked Snail",
            "./Media/Image/Items/Snail_Cooked.png",
            y.cooked_Food.snail_Cooked,
            "Frech Delicacy",
            !0,
            [10, 10, 0, 5],
            10
          )
        );
    }
  }
  class I {
    constructor() {
      (this.items = []),
        this.items.push(
          new P(
            "Stick",
            "./Media/Image/Items/stick.png",
            y.material.stick,
            "Plenty in forest",
            !1,
            void 0,
            30
          )
        ),
        this.items.push(
          new P(
            "Rock",
            "./Media/Image/Items/rock.png",
            y.material.rock,
            "Plenty in forest",
            !1,
            void 0,
            30
          )
        );
    }
  }
  class v {
    constructor() {
      (this.items = []),
        this.items.push(
          new P(
            "Passport",
            "./Media/Image/Items/Passport.png",
            y.tool.passport,
            "My Passport",
            !1,
            void 0,
            1
          )
        ),
        this.items.push(
          new P(
            "Axe",
            "./Media/Image/Items/axe.png",
            y.tool.axe,
            "Axe",
            !1,
            void 0,
            1
          )
        ),
        this.items.push(
          new P(
            "Spear",
            "./Media/Image/Items/spear.png",
            y.tool.spear,
            "Spear",
            !1,
            void 0,
            1
          )
        ),
        this.items.push(
          new P("fail", "", y.nothing.nothing, "", !1, void 0, 1)
        );
    }
  }
  class k {
    constructor() {
      (this.items = []),
        (this.raw_food_items = new w()),
        (this.tool_items = new v()),
        (this.cooked_food_items = new f()),
        (this.materail = new I());
      for (const e in this.raw_food_items.items)
        this.items.push(this.raw_food_items.items[e]);
      for (const e in this.tool_items.items)
        this.items.push(this.tool_items.items[e]);
      for (const e in this.cooked_food_items.items)
        this.items.push(this.cooked_food_items.items[e]);
      for (const e in this.materail.items)
        this.items.push(this.materail.items[e]);
    }
  }
  const y = {
    food: {
      banana: 1,
      coconut: 2,
      berry: 3,
      fish: 4,
      spider: 11,
      snail: 12,
      freshWater: 41,
    },
    cooked_Food: { fish_Cooked: 51, spider_Cooked: 61, snail_Cooked: 62 },
    material: { stick: 101, rock: 102 },
    tool: { passport: 151, spear: 161, axe: 162 },
    nothing: { nothing: 999 },
  };
  class x {
    constructor() {
      (this.items = []), (this.itemList = new k());
      for (const e in this.itemList.items)
        this.items.push(this.itemList.items[e]);
    }
    findOne(e) {
      return this.items.find((t) => t.ID === e);
    }
    Debug() {
      const e = this.items.find((e) => "Passport" === e.name);
      console.table(this.items), console.table(e);
    }
  }
  class b {
    constructor(t, s, i = !1, o = 0) {
      (this.isPreview = i),
        (this.amount = o),
        (this.item = s),
        (this.pos = t),
        (this.image = new e(s.imageURL));
    }
    render(e) {
      e.save(),
        (e.fillStyle = "rgba(0, 0, 0, 0.411)"),
        e.fillRect(this.pos[0], this.pos[1], 50, 50),
        Y.current === Y.none &&
          (i.mousemovePos[0] > this.pos[0] &&
          i.mousemovePos[1] > this.pos[1] &&
          i.mousemovePos[0] < this.pos[0] + 50 &&
          i.mousemovePos[1] < this.pos[1] + 50
            ? (e.globalAlpha = 0.7)
            : (e.globalAlpha = 1),
          i.clickPos[0] > this.pos[0] &&
            i.clickPos[1] > this.pos[1] &&
            i.clickPos[0] < this.pos[0] + 50 &&
            i.clickPos[1] < this.pos[1] + 50 &&
            ((Y.current = Y.opened),
            (Y.item = this.item),
            (i.clickPos = [0, 0]))),
        e.drawImage(
          this.image.element,
          this.pos[0] + 5,
          this.pos[1] + 5,
          40,
          40
        ),
        (e.fillStyle = "rgba(255,255, 255)"),
        e.fillText(
          this.isPreview ? this.amount.toString() : this.item.amount.toString(),
          this.pos[0] + 45,
          this.pos[1] + 47.5
        ),
        e.restore();
    }
  }
  const M = [],
    A = [];
  class S {
    constructor(e) {
      (this.items = e), (this.page = d.current), (this.itemSystem = new N(e));
    }
    render(e) {
      for (let t = 16 * (d.current - 1); t < 16 * (d.current - 1) + 16; t++)
        t < C.length && A[t].render(e);
    }
  }
  S.totalPages = 1;
  const T = { isPop: !1, itemName: "", amount: -1 };
  class R {
    constructor() {}
    render(e) {
      e.save(),
        (e.fillStyle = "16px poppins"),
        (e.fillStyle = "black"),
        e.fillRect(110, 532, 175, 25),
        (e.fillStyle = "white"),
        (e.textAlign = "center"),
        "fail" !== T.itemName
          ? (e.fillText(T.itemName, 180, 550),
            e.fillText(T.amount > 0 ? `+${T.amount}` : `${T.amount}`, 250, 550))
          : e.fillText(T.itemName, 180, 550),
        e.restore();
    }
  }
  let C = [];
  const U = (e) => C.find((t) => t.ID === e) || null,
    _ = (e, t, s) => {
      const i = C.findIndex((t) => t.ID === e);
      if (e === y.nothing.nothing)
        return (T.isPop = !0), (T.amount = 0), void (T.itemName = "fail");
      if (C.length > 47) return;
      if (i >= 0)
        return void (
          C[i].amount < C[i].maxAmount &&
          ((C[i].amount += t),
          (T.isPop = !0),
          (T.amount = 1),
          (T.itemName = C[i].name))
        );
      const o = new b(M[C.length % 16], s.findOne(e));
      A.push(o),
        (T.isPop = !0),
        (T.amount = 1),
        (T.itemName = s.findOne(e).name),
        C.push(s.findOne(e));
    },
    D = (e, t = 1) => {
      const s = C.findIndex((t) => t.ID === e.ID);
      if (C.length > 47) return;
      if (s >= 0)
        return void (
          C[s].amount < C[s].maxAmount &&
          ((C[s].amount += t),
          (T.isPop = !0),
          (T.amount = 1),
          (T.itemName = e.name))
        );
      if (e.ID === y.nothing.nothing)
        return (T.isPop = !0), (T.amount = 0), void (T.itemName = "fail");
      const i = new b(M[C.length % 16], e);
      A.push(i),
        (T.isPop = !0),
        (T.amount = 1),
        (T.itemName = e.name),
        C.push(e);
    },
    B = (e, t = 1) => {
      L();
      const s = C.findIndex((t) => t.ID === e.ID);
      s >= 0 &&
        (C[s].amount < 2
          ? ((T.isPop = !0),
            (T.amount = -1),
            (T.itemName = e.name),
            C.splice(s, 1))
          : ((T.isPop = !0),
            (T.amount = -1),
            (T.itemName = e.name),
            (C[s].amount -= t)),
        L());
    },
    L = () => {
      for (let e = 0; e < C.length; e++)
        (A[e].item = C[e]), (A[e].image = C[e].image), (A[e].pos = M[e]);
    };
  class N {
    constructor(e) {
      (this.items = []),
        (() => {
          let e = 0,
            t = 0;
          for (let s = 0; s < 16; s++)
            M.push([70 + 70 * e, 220 + 70 * t]), e++, e > 3 && ((e = 0), t++);
        })(),
        D(e.findOne(y.tool.passport));
    }
  }
  class E {
    constructor(e, t, s, i, o = !1) {
      (this.ingredients = []),
        (this.ingredients_ = []),
        (this.itemBoxs = []),
        (this.pos = e),
        (this.cookItem = i.findOne(s)),
        (this.ingredients_ = t);
      for (const s in t) {
        const { ID: o, amount: h } = t[s],
          n = i.findOne(o);
        this.ingredients.push(n),
          this.itemBoxs.push(new b(e, n, !0, h)),
          (e = [e[0] + 80, e[1]]);
      }
      this.itemBoxs.push(new b([270, e[1]], i.findOne(s), !0, 1)),
        (this._b = o);
    }
    render(e) {
      for (const t in this.itemBoxs) this.itemBoxs[t].render(e);
      e.save(),
        (e.fillStyle = "black"),
        (e.font = "25px poppins"),
        e.fillText("+", this.pos[0] + 65, this.pos[1] + 35),
        e.restore();
      let t = !1,
        s = !1;
      for (const e in this.ingredients_) {
        const s = U(this.ingredients_[e].ID);
        if (!s || s.amount < this.ingredients_[e].amount) break;
        parseInt(e) === this.ingredients.length - 1 && (t = !0);
      }
      const o = U(this.cookItem.ID);
      if (
        ((null == o ? void 0 : o.amount) === this.cookItem.maxAmount &&
          (s = !0),
        (e.fillStyle = t && !s ? "red" : "grey"),
        e.fillRect(this.pos[0] + 140, this.pos[1] + 15, 40, 19.5),
        (e.font = "14px Poppins"),
        (e.fillStyle = "white"),
        s
          ? e.fillText("full", this.pos[0] + 160, this.pos[1] + 30)
          : e.fillText(
              this._b ? "craft" : "cook",
              this.pos[0] + 160,
              this.pos[1] + 30
            ),
        i.mousemovePos[0] > this.pos[0] + 140 &&
          i.mousemovePos[1] > this.pos[1] + 15 &&
          i.mousemovePos[0] < this.pos[0] + 180 &&
          i.mousemovePos[1] < this.pos[1] + 34.5 &&
          t &&
          !s &&
          ((e.fillStyle = "rgba(0, 0, 0, 0.2)"),
          e.fillRect(this.pos[0] + 140, this.pos[1] + 15, 40, 19.5)),
        i.clickPos[0] > this.pos[0] + 140 &&
          i.clickPos[1] > this.pos[1] + 15 &&
          i.clickPos[0] < this.pos[0] + 180 &&
          i.clickPos[1] < this.pos[1] + 34.5 &&
          t &&
          !s)
      ) {
        for (const e in this.ingredients)
          B(this.ingredients[e], this.ingredients[e].amount);
        (p.minute += 20), D(this.cookItem), L(), (i.clickPos = [0, 0]);
      }
    }
  }
  class F {
    constructor(e) {
      (this.cooks = []),
        this.cooks.push(
          new E(
            [80, 210],
            [
              { ID: y.food.fish, amount: 1 },
              { ID: y.material.stick, amount: 2 },
            ],
            y.cooked_Food.fish_Cooked,
            e
          )
        ),
        this.cooks.push(
          new E(
            [80, 280],
            [
              { ID: y.food.fish, amount: 1 },
              { ID: y.material.stick, amount: 2 },
            ],
            y.cooked_Food.fish_Cooked,
            e
          )
        ),
        this.cooks.push(
          new E(
            [80, 350],
            [
              { ID: y.food.snail, amount: 1 },
              { ID: y.material.stick, amount: 2 },
            ],
            y.cooked_Food.snail_Cooked,
            e
          )
        ),
        this.cooks.push(
          new E(
            [80, 420],
            [
              { ID: y.food.spider, amount: 1 },
              { ID: y.material.stick, amount: 3 },
            ],
            y.cooked_Food.spider_Cooked,
            e
          )
        );
    }
    render(e) {
      for (const t in this.cooks) this.cooks[t].render(e);
    }
  }
  const O = { current: 1, maxPage: 4 };
  class G extends u {
    constructor(e) {
      super(),
        (this.prevPageController = new W(
          [163, 528],
          "./Media/Image/UI/PrevPage.png",
          -1,
          "FIRE"
        )),
        (this.nextPageController = new W(
          [235, 527],
          "./Media/Image/UI/NextPage.png",
          1,
          "FIRE"
        )),
        (this.cookContent = new F(e));
    }
    render(e) {
      super.render(e),
        this.prevPageController.render(e),
        this.nextPageController.render(e),
        this.cookContent.render(e),
        e.save(),
        (e.fillStyle = "black"),
        e.fillText(O.current.toString(), 200, 532),
        e.restore();
    }
  }
  class H {
    constructor(t, s, i) {
      (this.pos = t),
        (this.sleepTime = s),
        (this.recoverAttr = i),
        (this.image = new e("./Media/Image/UI/Sleep.png"));
    }
    render(e) {
      (e.fillStyle = "rgba(0, 0, 0, 0.411)"),
        e.fillRect(this.pos[0], this.pos[1], 50, 50),
        e.drawImage(
          this.image.element,
          this.pos[0] + 5,
          this.pos[1] + 5,
          40,
          40
        ),
        (e.fillStyle = "black"),
        e.fillText,
        e.fillText(
          this.sleepTime / 60 + " hours",
          this.pos[0] + 100,
          this.pos[1] + 30
        ),
        (e.fillStyle = "red"),
        e.fillRect(this.pos[0] + 200, this.pos[1] + 15, 40, 19.5),
        (e.font = "14px Poppins"),
        (e.fillStyle = "white"),
        e.fillText("sleep", this.pos[0] + 220, this.pos[1] + 30),
        i.mousemovePos[0] > this.pos[0] + 200 &&
          i.mousemovePos[1] > this.pos[1] + 15 &&
          i.mousemovePos[0] < this.pos[0] + 240 &&
          i.mousemovePos[1] < this.pos[1] + 34.5 &&
          ((e.fillStyle = "rgba(0, 0, 0, 0.2)"),
          e.fillRect(this.pos[0] + 200, this.pos[1] + 15, 40, 19.5)),
        i.clickPos[0] > this.pos[0] + 200 &&
          i.clickPos[1] > this.pos[1] + 15 &&
          i.clickPos[0] < this.pos[0] + 240 &&
          i.clickPos[1] < this.pos[1] + 34.5 &&
          ((p.minute += this.sleepTime),
          (l.health += this.recoverAttr[0]),
          (l.mentality += this.recoverAttr[3]),
          (i.clickPos = [0, 0]));
    }
  }
  class $ {
    constructor(e) {
      (this.sleeps = []),
        (this.cooks = []),
        this.sleeps.push(new H([80, 210], 60, [8, 0, 0, 5])),
        this.sleeps.push(new H([80, 280], 180, [24, 0, 0, 10])),
        this.sleeps.push(new H([80, 350], 360, [48, 0, 0, 15])),
        this.cooks.push(
          new E(
            [80, 210],
            [
              { ID: y.material.stick, amount: 1 },
              { ID: y.material.rock, amount: 2 },
            ],
            y.tool.spear,
            e,
            !0
          )
        ),
        this.cooks.push(
          new E(
            [80, 280],
            [
              { ID: y.material.stick, amount: 1 },
              { ID: y.material.rock, amount: 2 },
            ],
            y.tool.axe,
            e,
            !0
          )
        );
    }
    render(e) {
      if (j.current === j.sleep)
        for (const t in this.sleeps) this.sleeps[t].render(e);
      if (j.current === j.tool)
        for (const t in this.cooks) this.cooks[t].render(e);
    }
  }
  const j = { current: 1, sleep: 1, tool: 2, maxPage: 3 };
  class V extends u {
    constructor(e) {
      super(),
        (this.prevPageController = new W(
          [163, 528],
          "./Media/Image/UI/PrevPage.png",
          -1,
          "TENT"
        )),
        (this.nextPageController = new W(
          [235, 527],
          "./Media/Image/UI/NextPage.png",
          1,
          "TENT"
        )),
        (this.sleeps = new $(e));
    }
    render(e) {
      super.render(e),
        this.nextPageController.render(e),
        this.prevPageController.render(e),
        this.sleeps.render(e),
        e.save(),
        (e.fillStyle = "black"),
        e.fillText(j.current.toString(), 200, 532),
        e.restore();
    }
  }
  const q = { current: 1, maxPage: 8 };
  class W {
    constructor(t, s, i, o) {
      (this.pos = t),
        (this.imageURL = s),
        (this.image = new e(s)),
        (this.amount = i),
        (this.pageControllTarget = o);
    }
    render(e) {
      e.save(),
        Y.current === Y.none &&
          (i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
            ? (e.globalAlpha = 0.7)
            : (e.globalAlpha = 1),
          i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
            i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
            i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
            i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
            ("BAG" === this.pageControllTarget &&
              d.current + this.amount != 0 &&
              d.current + this.amount != d.maxPage &&
              (d.current += this.amount),
            "GUIDE" === this.pageControllTarget &&
              q.current + this.amount != 0 &&
              q.current + this.amount != q.maxPage &&
              (q.current += this.amount),
            "FIRE" === this.pageControllTarget &&
              O.current + this.amount != 0 &&
              O.current + this.amount != O.maxPage &&
              (O.current += this.amount),
            "TENT" === this.pageControllTarget &&
              j.current + this.amount != 0 &&
              j.current + this.amount != j.maxPage &&
              (j.current += this.amount),
            (i.clickPos = [0, 0]))),
        e.drawImage(
          this.image.element,
          this.pos[0] - this.image.element.width / 2,
          this.pos[1] - this.image.element.height / 2
        ),
        e.restore();
    }
  }
  const Y = {
    current: 0,
    none: 0,
    opened: 1,
    item: new P(
      "Coconut",
      "./Media/Image/Items/Coconut.png",
      y.food.coconut,
      "A Coconut",
      !0,
      [0, 10, 20, 0]
    ),
  };
  class X extends u {
    constructor() {
      super(),
        (this.prevPageController = new W(
          [163, 528],
          "./Media/Image/UI/PrevPage.png",
          -1,
          "BAG"
        )),
        (this.nextPageController = new W(
          [235, 527],
          "./Media/Image/UI/NextPage.png",
          1,
          "BAG"
        ));
    }
    render(e) {
      super.render(e),
        this.prevPageController.render(e),
        this.nextPageController.render(e),
        (e.fillStyle = "black"),
        e.fillText(d.current.toString(), 200, 532);
    }
  }
  class z {
    constructor(
      t,
      s,
      i,
      o = !1,
      h = "",
      n = !1,
      r = 99,
      a = !1,
      l = 99,
      c = "none"
    ) {
      (this.panelOpen = 99),
        (this.image = new e(i)),
        (this.imageURL = i),
        (this.image.element.src = i),
        (this.isHoverAble = o),
        (this.imageHoverURL = h),
        (this.isOpenPanelable = n),
        (this.panelOpen = r),
        (this.isChangeSenceAble = a),
        (this.gotoSence = l),
        (this.pos = [t, s]),
        (this._objectName_test = c);
    }
    render(e) {
      e.save(),
        ((Y.current === Y.none && n.current === n.none) ||
          ("none" !== this._objectName_test && Y.current === Y.none)) &&
          (this.isOpenPanelable
            ? i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
              i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
              i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
              i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
              ((i.clickPos = [0, 0]), (n.current = this.panelOpen))
            : this.isChangeSenceAble &&
              i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
              i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
              i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
              i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
              ((i.clickPos = [0, 0]), (o.current = this.gotoSence)),
          this.isHoverAble &&
            (i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
            i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
            i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
            i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
              ? (e.globalAlpha = 0.7)
              : (e.globalAlpha = 1))),
        e.drawImage(
          this.image.element,
          this.pos[0] - this.image.element.width / 2,
          this.pos[1] - this.image.element.height / 2
        ),
        e.restore();
    }
  }
  class J extends z {
    constructor() {
      super(
        364,
        149,
        "./Media/Image/UI/Guide-Icon.png",
        !0,
        void 0,
        !0,
        n.guide
      );
    }
    render(e) {
      super.render(e);
    }
  }
  class K {
    constructor() {
      (this.background = new t(0, 0, "./Media/Image/Backgrounds/home.png")),
        (this.tent = new z(
          80,
          465,
          "./Media/Image/SenceObjects/tent.png",
          !0,
          void 0,
          !0,
          n.tent
        )),
        (this.fire = new z(
          190,
          540,
          "./Media/Image/SenceObjects/fire.png",
          !0,
          void 0,
          !0,
          n.fire
        )),
        (this.bag = new z(
          350,
          445,
          "./Media/Image/SenceObjects/bag.png",
          !0,
          void 0,
          !0,
          n.bag
        )),
        (this.leaveArrow = new z(
          70,
          220,
          "./Media/Image/UI/Leave-Arrow.png",
          !0,
          void 0,
          void 0,
          void 0,
          !0,
          o.map
        ));
    }
    render(e) {
      this.background.render(e),
        this.fire.render(e),
        this.tent.render(e),
        this.leaveArrow.render(e),
        this.bag.render(e);
    }
  }
  class Q {}
  (Q.current = 1),
    (Q.home = 1),
    (Q.river = 3),
    (Q.jungle = 4),
    (Q.waterfall = 5),
    (Q.mapPos = []);
  class Z {
    constructor(t, s, i = !1, o = !1, h = 99, n = "") {
      (this.pos = [t[0], t[1]]),
        (this.imageURL = s),
        (this.isHoverAble = i),
        (this.isChangeSenceAble = o),
        (this.gotoSence = h),
        (this.senceName = n),
        (this.image = new e(s)),
        Q.mapPos.push([t[0], t[1], this.senceName]);
    }
    calculateCost(e, t) {
      const s = Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2));
      return Math.round(s);
    }
    debug() {
      console.log(
        `${Q.mapPos[Q.current][2]} ${Q.mapPos[Q.current][0]},${
          Q.mapPos[Q.current][1]
        }`,
        `${Q.mapPos[this.gotoSence][2]} ${Q.mapPos[this.gotoSence][0]},${
          Q.mapPos[this.gotoSence][1]
        }`,
        "distance = " +
          this.calculateCost(
            [Q.mapPos[Q.current][0], Q.mapPos[Q.current][1]],
            [Q.mapPos[this.gotoSence][0], Q.mapPos[this.gotoSence][1]]
          )
      );
    }
    render(e) {
      if (
        (e.save(),
        n.current === n.none &&
          (this.isHoverAble &&
            (i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
            i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
            i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
            i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
              ? (e.globalAlpha = 0.7)
              : (e.globalAlpha = 1)),
          this.isChangeSenceAble &&
            i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
            i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
            i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
            i.clickPos[1] < this.pos[1] + this.image.element.height / 2))
      ) {
        let e = 0;
        (i.clickPos = [0, 0]),
          Q.current !== this.gotoSence &&
            (e =
              this.calculateCost(
                [Q.mapPos[Q.current][0], Q.mapPos[Q.current][1]],
                [Q.mapPos[this.gotoSence][0], Q.mapPos[this.gotoSence][1]]
              ) / 2),
          (p.minute += e),
          this.debug();
        const t = (l.hunger -= e / 15),
          s = (l.thirsty -= e / 10);
        l.hunger <= 0 ? (l.hunger = 0) : (l.hunger = t),
          l.thirsty <= 0 ? (l.thirsty = 0) : (l.thirsty = s),
          (o.current = this.gotoSence),
          (Q.current = this.gotoSence);
      }
      e.drawImage(
        this.image.element,
        this.pos[0] - this.image.element.width / 2 + 4,
        this.pos[1] - this.image.element.height / 2 + 2
      ),
        e.restore();
    }
  }
  class ee {
    constructor() {
      (this._menu = new Z([0, 0], "", void 0, void 0, void 0, "")),
        (this.home = new Z(
          [172, 438],
          "./Media/Image/MapIcon/home.png",
          !0,
          !0,
          o.home,
          "Home"
        )),
        (this._map = new Z([0, 0], "")),
        (this.river = new Z(
          [128, 553],
          "./Media/Image/MapIcon/river.png",
          !0,
          !0,
          o.river,
          "River"
        )),
        (this.jungle = new Z(
          [102, 245],
          "./Media/Image/MapIcon/jungle.png",
          !0,
          !0,
          o.jungle,
          "Jungle"
        )),
        (this.waterfall = new Z(
          [322, 194],
          "./Media/Image/MapIcon/waterfall.png",
          !0,
          !0,
          o.waterfall,
          "Waterfall"
        ));
    }
    render(e) {
      this.home.render(e),
        this.river.render(e),
        this.jungle.render(e),
        this.waterfall.render(e);
    }
  }
  class te {
    constructor() {
      (this.background = new t(0, 0, "./Media/Image/Backgrounds/map.png")),
        (this.mapIcons = new ee()),
        (this.redDot = new se(100, 100));
    }
    render(e) {
      this.background.render(e), this.mapIcons.render(e), this.redDot.render(e);
    }
  }
  class se {
    constructor(t, s) {
      (this.imageURL = "./Media/Image/UI/red-dot.png"),
        (this.pos = [t, s]),
        (this.image = new e(this.imageURL));
    }
    render(e) {
      e.drawImage(
        this.image.element,
        Q.mapPos[Q.current][0],
        Q.mapPos[Q.current][1]
      );
    }
  }
  class ie {
    constructor(e) {
      (this.background = new t(
        0,
        0,
        "./Media/Image/Backgrounds/waterfall.png"
      )),
        (this.leaveArrow = new z(
          70,
          220,
          "./Media/Image/UI/Leave-Arrow.png",
          !0,
          void 0,
          void 0,
          void 0,
          !0,
          2
        ));
    }
    render(e) {
      this.background.render(e), this.leaveArrow.render(e);
    }
  }
  class oe {
    constructor(e, t, s, i, o, h = "", n = []) {
      (this.itemCollections = []),
        (this.table = []),
        (this.total = 0),
        (this.pos = e),
        (this.text = t),
        (this.itemCollections = s),
        (this.costTime = i),
        (this.hint = h),
        (this.itemNeeded = n),
        (this.items = o);
      for (const e in s)
        (this.total += this.itemCollections[e].dropRate),
          this.table.push(this.itemCollections[e].dropRate);
    }
    render(e) {
      e.save(),
        (e.font = "16px poppins"),
        (e.fillStyle = "black"),
        (e.textAlign = "center"),
        e.fillText(this.text, this.pos[0], this.pos[1]),
        e.fillText(`${this.costTime}mins`, this.pos[0] + 100, this.pos[1]),
        (e.font = "12px poppins"),
        e.fillText(this.hint, this.pos[0], this.pos[1] + 20);
      let t = !1;
      if (0 === this.itemNeeded.length) t = !0;
      else
        for (const e in this.itemNeeded) {
          if (!C.find((t) => t.ID === this.itemNeeded[e].ID)) {
            t = !1;
            break;
          }
          parseInt(e) === this.itemNeeded.length - 1 && (t = !0);
        }
      if (
        ((e.fillStyle = t ? "red" : "grey"),
        e.fillRect(this.pos[0] + 160, this.pos[1] - 15, 40, 19.5),
        (e.font = "14px Poppins"),
        (e.fillStyle = "white"),
        e.fillText("Do", this.pos[0] + 180, this.pos[1]),
        i.mousemovePos[0] > this.pos[0] + 160 &&
          i.mousemovePos[1] > this.pos[1] - 15 &&
          i.mousemovePos[0] < this.pos[0] + 200 &&
          i.mousemovePos[1] < this.pos[1] + 4.5 &&
          t &&
          ((e.fillStyle = "rgba(0, 0, 0, 0.2)"),
          e.fillRect(this.pos[0] + 160, this.pos[1] - 15, 40, 19.5)),
        i.clickPos[0] > this.pos[0] + 160 &&
          i.clickPos[1] > this.pos[1] - 15 &&
          i.clickPos[0] < this.pos[0] + 200 &&
          i.clickPos[1] < this.pos[1] + 4.5 &&
          t)
      ) {
        i.clickPos = [0, 0];
        const e = (l.hunger -= this.costTime / 15),
          t = (l.thirsty -= this.costTime / 10);
        l.hunger <= 0 ? (l.hunger = 0) : (l.hunger = e),
          l.thirsty <= 0 ? (l.thirsty = 0) : (l.thirsty = t),
          (p.minute += this.costTime);
        let s = Math.floor(Math.random() * this.total);
        for (let e = 0; e < this.table.length; e++) {
          if (s <= this.table[e]) {
            console.log(
              `award ${this.items.findOne(this.itemCollections[e].ID).name}`
            ),
              _(this.itemCollections[e].ID, 1, this.items);
            break;
          }
          s -= this.table[e];
        }
      }
      e.restore();
    }
  }
  class he extends u {
    constructor(e) {
      super([50, 275], "./Media/Image/UI/Small-Panel.png", !1),
        (this.behaviors = []),
        this.behaviors.push(
          new oe(
            [120, 320],
            "gather insect",
            [
              { ID: y.food.snail, amount: 1, dropRate: 50 },
              { ID: y.food.spider, amount: 1, dropRate: 50 },
            ],
            20,
            e
          )
        ),
        this.behaviors.push(
          new oe(
            [120, 400],
            "gather material",
            [
              { ID: y.material.rock, amount: 1, dropRate: 50 },
              { ID: y.material.stick, amount: 1, dropRate: 50 },
            ],
            10,
            e
          )
        ),
        this.behaviors.push(
          new oe(
            [120, 480],
            "gather fruit",
            [
              { ID: y.food.banana, amount: 1, dropRate: 30 },
              { ID: y.food.berry, amount: 1, dropRate: 50 },
              { ID: y.food.coconut, amount: 1, dropRate: 20 },
            ],
            30,
            e
          )
        );
    }
    render(e) {
      super.render(e);
      for (const t in this.behaviors) this.behaviors[t].render(e);
    }
  }
  class ne {
    constructor(e) {
      (this.panel = new he(e)),
        (this.background = new t(0, 0, "./Media/Image/Backgrounds/jungle.png")),
        (this.leaveArrow = new z(
          70,
          220,
          "./Media/Image/UI/Leave-Arrow.png",
          !0,
          void 0,
          void 0,
          void 0,
          !0,
          2
        ));
    }
    render(e) {
      this.background.render(e),
        this.leaveArrow.render(e),
        this.panel.render(e);
    }
  }
  class re extends u {
    constructor(e) {
      super([50, 275], "./Media/Image/UI/Small-Panel.png", !1),
        (this.behaviors = []),
        this.behaviors.push(
          new oe(
            [120, 320],
            "catch fish",
            [
              { ID: y.food.fish, amount: 1, dropRate: 70 },
              { ID: y.nothing.nothing, amount: 1, dropRate: 30 },
            ],
            30,
            e,
            "(need spear)",
            [{ ID: 161, amount: 1 }]
          )
        ),
        this.behaviors.push(
          new oe(
            [120, 400],
            "fill water",
            [{ ID: y.food.freshWater, amount: 1, dropRate: 70 }],
            10,
            e
          )
        );
    }
    render(e) {
      super.render(e);
      for (const t in this.behaviors) this.behaviors[t].render(e);
    }
  }
  class ae {
    constructor(e) {
      (this.background = new t(0, 0, "./Media/Image/Backgrounds/river.png")),
        (this.leaveArrow = new z(
          70,
          220,
          "./Media/Image/UI/Leave-Arrow.png",
          !0,
          void 0,
          void 0,
          void 0,
          !0,
          2
        )),
        (this.panel = new re(e));
    }
    render(e) {
      this.background.render(e),
        this.leaveArrow.render(e),
        this.panel.render(e);
    }
  }
  class le {
    constructor(e, t, s = ["16px", "black"]) {
      (this.text = t),
        (this.pos = e),
        (this.fontSize = s[0]),
        (this.color = s[1]);
    }
    fillText(e) {
      e.save(),
        (e.font = `500 ${this.fontSize} cursive__`),
        (e.fillStyle = this.color),
        e.fillText(this.text, this.pos[0], this.pos[1]),
        e.restore();
    }
  }
  const ce = [112, 233];
  class me {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 266]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        this.article.push(new le(this.articlePos[0], "1. Don't starve.")),
        this.article.push(new le(this.articlePos[1], "2. Consume drinkable")),
        this.article.push(new le(this.articlePos[2], "liquid.")),
        this.article.push(new le(this.articlePos[3], "3. Don't put anything.")),
        this.article.push(new le(this.articlePos[4], "in your mouth.")),
        this.article.push(new le(this.articlePos[5], "3. Don't get sick.")),
        this.article.push(new le(this.articlePos[6], "4. Stay positive.")),
        this.article.push(new le(this.articlePos[7], "5. Aware of Beast.")),
        this.article.push(
          new le(this.articlePos[8], "6. Can't Go out of your")
        ),
        this.article.push(new le(this.articlePos[9], "camp at night.")),
        this.article.push(
          new le(
            [this.articlePos[10][0], this.articlePos[10][1]],
            "Important!",
            ["20px", "red"]
          )
        ),
        this.article.push(
          new le(
            [this.articlePos[11][0] + 15, this.articlePos[11][1]],
            "Don't Die!",
            ["22px", "red"]
          )
        );
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class pe {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 270]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        (this.healthIcon = new r(
          112,
          262,
          "./Media/Image/UI/Attr/health.png",
          !0,
          "./Media/Image/UI/Attr/health-hover.png"
        )),
        this.article.push(
          new le(this.articlePos[1], "Most important", ["16px", "red"])
        ),
        this.article.push(new le(this.articlePos[2], "Attribute, If this")),
        this.article.push(new le(this.articlePos[3], "attribute value goes")),
        this.article.push(new le(this.articlePos[4], "0, Game will be over.")),
        this.article.push(new le(this.articlePos[5], "If you get some")),
        this.article.push(new le(this.articlePos[6], "illness, health value")),
        this.article.push(new le(this.articlePos[7], "will decrease slowly")),
        this.article.push(new le(this.articlePos[8], "or rapidly, depends")),
        this.article.push(new le(this.articlePos[9], "on what illness you")),
        this.article.push(new le(this.articlePos[10], "get."));
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e),
        e.save(),
        (e.fillStyle = "black"),
        e.fillRect(94, 244, 35, 35),
        e.restore(),
        this.healthIcon.render(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class ge {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 270]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        (this.hungerIcon = new r(
          112,
          262,
          "./Media/Image/UI/Attr/hunger.png",
          !0,
          "./Media/Image/UI/Attr/hunger-hover.png"
        )),
        this.article.push(new le(this.articlePos[2], "Starving can make")),
        this.article.push(new le(this.articlePos[3], "mentality and health")),
        this.article.push(new le(this.articlePos[4], "value decrease,")),
        this.article.push(new le(this.articlePos[5], "even get sick.")),
        this.article.push(new le(this.articlePos[6], "No matter how hungry ")),
        this.article.push(new le(this.articlePos[7], "you are, don't eat")),
        this.article.push(new le(this.articlePos[8], "unknown things in")),
        this.article.push(new le(this.articlePos[9], "the rainforest."));
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e),
        e.save(),
        (e.fillStyle = "black"),
        e.fillRect(94, 244, 35, 35),
        e.restore(),
        this.hungerIcon.render(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class ue {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 270]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        (this.thirstyIcon = new r(
          289,
          373,
          "./Media/Image/UI/Attr/thirsty-hover.png",
          !1
        )),
        this.article.push(new le(this.articlePos[0], "The worst thing is")),
        this.article.push(new le(this.articlePos[1], "don't have any thing")),
        this.article.push(new le(this.articlePos[2], "can drink, If you ")),
        this.article.push(new le(this.articlePos[3], "starve , that's fine ,")),
        this.article.push(new le(this.articlePos[4], "but get thirsty,It ")),
        this.article.push(new le(this.articlePos[5], "can kill you in 3")),
        this.article.push(new le(this.articlePos[6], "days. So keep liquid")),
        this.article.push(new le(this.articlePos[7], "sufficient is ")),
        this.article.push(
          new le(this.articlePos[8], "important", ["24px", "red"])
        );
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e), this.thirstyIcon.render(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class de {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 270]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        (this.mentalIcon = new r(
          289,
          373,
          "./Media/Image/UI/Attr/mentality-hover.png",
          !1
        )),
        this.article.push(new le(this.articlePos[0], "A person who tries")),
        this.article.push(new le(this.articlePos[1], "to surivie in the")),
        this.article.push(new le(this.articlePos[2], "rainforest, keep")),
        this.article.push(new le(this.articlePos[3], "positive can make")),
        this.article.push(new le(this.articlePos[4], "things more easier.")),
        this.article.push(new le(this.articlePos[5], "If your mentality")),
        this.article.push(new le(this.articlePos[6], "value is low")),
        this.article.push(new le(this.articlePos[7], "other attrbuite will")),
        this.article.push(new le(this.articlePos[8], "decrease faster"));
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e), this.mentalIcon.render(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class Pe {
    constructor(t) {
      (this.article = []),
        (this.articlePos = [[40, 266]]),
        (this.mapIcon = []),
        this.calArticlePos(),
        (this.title = new le(ce, t, ["20px", "black"])),
        this.article.push(new le(this.articlePos[0], "You can visit every")),
        this.article.push(new le(this.articlePos[1], "spot on the map ,")),
        this.article.push(new le(this.articlePos[2], "BUT CARE FOR ---")),
        this.article.push(new le(this.articlePos[3], "It takes TIME and")),
        this.article.push(new le(this.articlePos[4], "ENERGY to TRVEAL!!")),
        this.article.push(
          new le(this.articlePos[6], "HOME  RIVER", ["20px", "red"])
        ),
        this.article.push(
          new le(this.articlePos[8], "JUNGLE  FALL", ["20px", "red"])
        ),
        this.mapIcon.push(new e("./Media/Image/MapIcon/home.png")),
        this.mapIcon.push(new e("./Media/Image/MapIcon/river.png")),
        this.mapIcon.push(new e("./Media/Image/MapIcon/jungle.png")),
        this.mapIcon.push(new e("./Media/Image/MapIcon/waterfall.png"));
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
      e.drawImage(this.mapIcon[0].element, 232, 267),
        e.drawImage(this.mapIcon[1].element, 315, 267),
        e.drawImage(this.mapIcon[2].element, 240, 335),
        e.drawImage(this.mapIcon[3].element, 332, 335);
    }
  }
  class we {
    constructor(e) {
      (this.article = []),
        (this.articlePos = [[40, 266]]),
        this.calArticlePos(),
        (this.title = new le(ce, e, ["20px", "black"])),
        this.article.push(new le(this.articlePos[0], "test test"));
    }
    calArticlePos() {
      for (let e = 0; e < 4; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
      this.articlePos.push([this.articlePos[4][0] + 180, 236]);
      for (let e = 5; e < 11; e++)
        this.articlePos.push([
          this.articlePos[e][0],
          this.articlePos[e][1] + 30,
        ]);
    }
    render(e) {
      this.title.fillText(e);
      for (const t in this.article)
        e.save(),
          (e.textAlign = "left"),
          this.article[t].fillText(e),
          e.restore();
    }
  }
  class fe {
    constructor() {
      (this.pages = []),
        this.pages.push(new me("How to survive")),
        this.pages.push(new pe("Health")),
        this.pages.push(new ge("Hunger")),
        this.pages.push(new ue("Thirsty")),
        this.pages.push(new de("Mentality")),
        this.pages.push(new Pe("Map")),
        this.pages.push(new we("Misson"));
    }
    render(e) {
      this.pages[q.current - 1].render(e);
    }
  }
  class Ie extends u {
    constructor() {
      super([10, 200], "./Media/Image/UI/Guide-Panel.png", !0, [373, 225]),
        (this.prevPageController = new W(
          [40, 415],
          "./Media/Image/UI/GuidePrevPage.png",
          -1,
          "GUIDE"
        )),
        (this.nextPageController = new W(
          [370, 413],
          "./Media/Image/UI/GuideNextPage.png",
          1,
          "GUIDE"
        )),
        (this.pages = new fe());
    }
    render(e) {
      super.render(e),
        1 !== q.current && this.prevPageController.render(e),
        q.current !== q.maxPage - 1 && this.nextPageController.render(e),
        (e.fillStyle = "black"),
        (e.font = "16px cursive__"),
        e.fillText(`${q.current.toString()}.`, 28, 230),
        this.pages.render(e);
    }
  }
  class ve {
    constructor(t, s) {
      (this.pos = t), (this.image = new e(s)), (this.imageURL = s);
    }
    render(e) {
      e.save(),
        i.mousemovePos[0] > this.pos[0] - this.image.element.width / 2 &&
        i.mousemovePos[1] > this.pos[1] - this.image.element.height / 2 &&
        i.mousemovePos[0] < this.pos[0] + this.image.element.width / 2 &&
        i.mousemovePos[1] < this.pos[1] + this.image.element.height / 2
          ? (e.globalAlpha = 0.7)
          : (e.globalAlpha = 1),
        i.clickPos[0] > this.pos[0] - this.image.element.width / 2 &&
          i.clickPos[1] > this.pos[1] - this.image.element.height / 2 &&
          i.clickPos[0] < this.pos[0] + this.image.element.width / 2 &&
          i.clickPos[1] < this.pos[1] + this.image.element.height / 2 &&
          ((i.clickPos = [0, 0]), (Y.current = Y.none)),
        e.drawImage(
          this.image.element,
          this.pos[0] - this.image.element.width / 2,
          this.pos[1] - this.image.element.height / 2
        ),
        e.restore();
    }
  }
  class ke {
    constructor(e = !1) {
      (this.image = Y.item.image),
        (this.isPreview = e),
        (this.xButton = new ve([295, 243], "./Media/Image/UI/x.png"));
    }
    render(e) {
      e.save(),
        (e.fillStyle = "rgba(0, 0, 0, 0.8)"),
        e.fillRect(85, 220, 230, 270),
        e.drawImage(Y.item.image.element, 120, 250, 150, 150),
        (e.fillStyle = "white"),
        e.fillText(Y.item.text, 198, 432),
        e.fillText(Y.item.name, 197, 239),
        this.isPreview ||
          ((e.fillStyle = !0 === Y.item.consumable ? "green" : "grey"),
          e.fillRect(156, 457, 40, 20),
          (e.fillStyle = "red"),
          e.fillRect(206, 457.5, 40, 19.5),
          (e.font = "14px Poppins"),
          (e.fillStyle = "white"),
          e.fillText("eat", 176, 472),
          e.fillText("drop", 226, 472),
          i.mousemovePos[0] > 156 &&
            i.mousemovePos[1] > 457 &&
            i.mousemovePos[0] < 196 &&
            i.mousemovePos[1] < 477 &&
            !0 === Y.item.consumable &&
            ((e.fillStyle = "rgba(0, 0, 0, 0.2)"),
            e.fillRect(156, 457, 40, 20)),
          i.clickPos[0] > 156 &&
            i.clickPos[1] > 457 &&
            i.clickPos[0] < 196 &&
            i.clickPos[1] < 477 &&
            !0 === Y.item.consumable &&
            (B(Y.item), this.recoverAttr(), L(), (Y.current = Y.none)),
          i.mousemovePos[0] > 206 &&
            i.mousemovePos[1] > 457.5 &&
            i.mousemovePos[0] < 246 &&
            i.mousemovePos[1] < 477.5 &&
            ((e.fillStyle = "rgba(0, 0, 0, 0.4)"),
            e.fillRect(206, 457.5, 40, 20)),
          i.clickPos[0] > 206 &&
            i.clickPos[1] > 457.5 &&
            i.clickPos[0] < 246 &&
            i.clickPos[1] < 477.5 &&
            (B(Y.item), L(), (Y.current = Y.none))),
        e.restore(),
        this.xButton.render(e);
    }
    recoverAttr() {
      const e = [l.health, l.hunger, l.thirsty, l.mentality],
        t = [
          (e[0] += Y.item.attrValue[0] * l.mentalityRate),
          (e[1] += Y.item.attrValue[1] * l.mentalityRate),
          (e[2] += Y.item.attrValue[2] * l.mentalityRate),
          (e[3] += Y.item.attrValue[3] * l.mentalityRate),
        ];
      t[0] >= 100
        ? (l.health = 100)
        : (l.health += Y.item.attrValue[0] * l.mentalityRate),
        t[1] >= 100
          ? (l.hunger = 100)
          : (l.hunger += Y.item.attrValue[1] * l.mentalityRate),
        t[2] >= 100
          ? (l.thirsty = 100)
          : (l.thirsty += Y.item.attrValue[2] * l.mentalityRate),
        t[3] >= 100
          ? (l.mentality = 100)
          : (l.mentality += Y.item.attrValue[3] * l.mentalityRate);
    }
  }
  class ye {
    constructor(t, s, i) {
      (this.pos = t),
        (this.lableTag = new e(s)),
        (this.imageURL = s),
        (this.image = new e("./Media/Image/UI/Lable.png")),
        (this.pageTarget = i);
    }
    render(e) {
      e.drawImage(this.image.element, this.pos[0], this.pos[1]),
        e.drawImage(
          this.lableTag.element,
          this.pos[0] + 7,
          this.pos[1] + 8,
          20,
          20
        ),
        i.mousemovePos[0] > this.pos[0] + 16 - this.image.element.width / 2 &&
        i.mousemovePos[1] > this.pos[1] + 18 - this.image.element.height / 2 &&
        i.mousemovePos[0] < this.pos[0] + 14 + this.image.element.width / 2 &&
        i.mousemovePos[1] < this.pos[1] + 16 + this.image.element.height / 2
          ? this.pos[1] < 432 && (this.pos[1] += 1)
          : this.pos[1] > 425 && (this.pos[1] -= 1),
        i.clickPos[0] > this.pos[0] + 16 - this.image.element.width / 2 &&
          i.clickPos[1] > this.pos[1] + 18 - this.image.element.height / 2 &&
          i.clickPos[0] < this.pos[0] + 14 + this.image.element.width / 2 &&
          i.clickPos[1] < this.pos[1] + 16 + this.image.element.height / 2 &&
          ((i.clickPos = [0, 0]), (q.current = this.pageTarget));
    }
  }
  class xe {
    constructor() {
      (this.attrLable = new ye(
        [43, 425],
        "./Media/Image/UI/Attr/health-hover.png",
        2
      )),
        (this.mapLable = new ye(
          [78, 425],
          "./Media/Image/MapIcon/home.png",
          6
        )),
        (this.missonLable = new ye(
          [113, 425],
          "./Media/Image/UI/exclamation_mark.png",
          7
        ));
    }
    render(e) {
      this.attrLable.render(e),
        this.mapLable.render(e),
        this.missonLable.render(e);
    }
  }
  class be {
    constructor(e) {
      (this.bagitemInfo = new ke(!1)),
        (this.fireitemInfo = new ke(!0)),
        (this.lables = new xe()),
        (this.fire = new G(e)),
        (this.guide = new Ie()),
        (this.bag = new X()),
        (this.tent = new V(e)),
        (this.itemBoxs = new S(e));
    }
    render(e) {
      n.current === n.guide && (this.lables.render(e), this.guide.render(e)),
        n.current === n.fire &&
          (this.fire.render(e),
          Y.current === Y.opened && this.fireitemInfo.render(e)),
        n.current === n.tent &&
          (this.tent.render(e),
          Y.current === Y.opened && this.fireitemInfo.render(e)),
        n.current === n.bag &&
          (this.bag.render(e),
          this.itemBoxs.render(e),
          Y.current === Y.opened && this.bagitemInfo.render(e));
    }
  }
  class Me {
    constructor() {
      (this.pop = new R()),
        (this.attrs = new m()),
        (this.timer = new g()),
        (this.guide = new J()),
        (this.items = new x()),
        (this.panels = new be(this.items)),
        (this.menu = new a()),
        (this.home = new K()),
        (this.map = new te()),
        (this.river = new ae(this.items)),
        (this.jungle = new ne(this.items)),
        (this.waterfall = new ie(this.items)),
        (this.quickBag = new r(
          30,
          150,
          "./Media/Image/UI/backpack.png",
          !0,
          "./Media/Image/UI/backpack_hover.png",
          !1,
          void 0,
          !1,
          !0,
          n.bag
        ));
    }
    render(e) {
      o.current === o.menu && this.menu.render(e),
        o.current === o.home && this.home.render(e),
        o.current === o.map && this.map.render(e),
        o.current === o.river && this.river.render(e),
        o.current === o.jungle && this.jungle.render(e),
        o.current === o.waterfall && this.waterfall.render(e),
        o.current !== o.menu &&
          (this.attrs.render(e),
          this.timer.render(e),
          this.guide.render(e),
          this.panels.render(e),
          this.quickBag.render(e)),
        T.isPop && h.current === h.inGame && this.pop.render(e);
    }
  }
  class Ae {}
  Ae.styleCursor = "default";
  let Se = !1,
    Te = 0,
    Re = 0;
  const Ce = document.getElementById("gameCanvas"),
    Ue = Ce.getContext("2d");
  (Ae.width = Ce.width), (Ae.height = Ce.height);
  const _e = new i();
  _e.clickListener(Ce), _e.mouseoverListener(Ce);
  const De = new (class {
      constructor() {
        (this.Sences = new Me()), (this.over = new s());
      }
      render(e) {
        (h.current === h.over && h.current === h.over) || this.Sences.render(e),
          h.current === h.over && this.over.render(e);
      }
    })(),
    Be = new (class {
      constructor() {
        (this.fps = 0), (this.times = []);
      }
      render(e) {
        const t = performance.now();
        for (; this.times.length > 0 && this.times[0] <= t - 1e3; )
          this.times.shift();
        this.times.push(t),
          (this.fps = this.times.length),
          (e.textAlign = "center"),
          (e.font = "20px Poppins"),
          (e.fillStyle = "#F3FF0F"),
          e.fillText(this.fps.toString(), 20, 20);
      }
    })(),
    Le =
      (new (class {
        constructor() {
          (this.items = new x()),
            (this.btn = document.getElementById("btn")),
            (this.ID = document.getElementById("itemId")),
            (this.itemBtn = document.getElementById("itembtn")),
            (this.amount = document.getElementById("itemAmount")),
            (this.lockBtn = document.getElementById("lockAttr")),
            (this.btn.onclick = () => {
              const e = parseInt(this.ID.value),
                t = parseInt(this.amount.value),
                s = this.items.items.find((t) => t.ID === e);
              D(s, t), L();
            }),
            (this.itemBtn.onclick = () => {
              console.table(C), console.table(this.items.items);
            }),
            (this.lockBtn.onclick = () => {
              Se = !Se;
            });
        }
      })(),
      () => {
        De.render(Ue), Be.render(Ue), requestAnimationFrame(Le);
      });
  setInterval(() => {
    p.minute % 1440 == 0 && p.day++,
      h.current === h.inGame &&
        (Se &&
          ((l.health = 100),
          (l.hunger = 100),
          (l.thirsty = 100),
          (l.mentality = 100)),
        Te++,
        l.hunger <= 0 && (l.hunger = 0),
        l.thirsty <= 0 && (l.thirsty = 0),
        l.health <= 0 && ((l.health = 0), (h.current = h.over)),
        l.mentality <= 0 && (l.mentality = 0),
        T.isPop && ((Re += 1), 2 === Re && ((T.isPop = !1), (Re = 0))),
        Te % 3 == 0 &&
          l.health > 0 &&
          (((l.hunger < 50 && l.hunger >= 25) ||
            (l.thirsty < 60 && l.thirsty >= 40)) &&
            (l.health -= 0.5),
          ((l.hunger < 25 && l.hunger >= 5) ||
            (l.thirsty < 40 && l.thirsty >= 10)) &&
            (l.health -= 1),
          (l.hunger < 5 || l.thirsty < 10) && (l.health -= 5)),
        l.mentality > 0 &&
          (l.mentality < 60 && (l.mentalityRate = 0.8),
          l.mentality < 25 && l.mentality >= 60 && (l.mentalityRate = 0.6)),
        l.hunger > 0 && 5 === Te && (l.hunger -= 1),
        l.mentality > 0 &&
          6 === Te &&
          (((l.hunger < 70 && l.hunger >= 45) ||
            (l.thirsty < 80 && l.thirsty >= 60)) &&
            (l.mentality -= 1),
          (l.hunger < 45 || l.thirsty < 60) && (l.mentality -= 1.5)),
        l.thirsty > 0 && 6 === Te && (l.thirsty -= 1),
        8 === Te && (Te = 0),
        p.minute++);
  }, 500),
    Le();
})();
