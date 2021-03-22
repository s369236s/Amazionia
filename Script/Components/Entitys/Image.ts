export default class _Image {
  element: HTMLImageElement;
  constructor(imageURL: string) {
    this.element = new Image();
    this.element.src = imageURL;
  }
}
