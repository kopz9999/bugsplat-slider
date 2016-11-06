export class Picture {
  constructor({id, url, description}) {
    this.id = id;
    this.url = url;
    this.description = description;
  }
}

class PictureFactory {
  constructor() {
    this.id = 0;
  }

  /**
   * @returns {Picture}
   */
  buildFromObject(obj) {
    return new Picture({
      ...obj,
      id: ++this.id,
    });
  }
}

export default new PictureFactory();
