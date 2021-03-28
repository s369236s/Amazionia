import Image from "../Entitys/Image";

type ItemAttr = [number, number, number, number]; //Health,Hunger,Thirsty,Mentality.
export class Item {
  imageURL: string;
  name: string;
  text: string;
  consumable: boolean;
  attrValue: ItemAttr;
  ID: number;
  amount: number = 1;
  maxAmount: number;
  image: Image;
  constructor(
    name: string,
    imageURL: string,
    ID: number,
    text: string = "",
    consumable: boolean = false,
    attrValue: ItemAttr = [0, 0, 0, 0],
    maxAmount: number = 10
  ) {
    this.text = text;
    this.consumable = consumable;
    this.attrValue = attrValue;
    this.name = name;
    this.imageURL = imageURL;
    this.ID = ID;
    this.maxAmount = maxAmount;
    this.image = new Image(imageURL);
  }
}
