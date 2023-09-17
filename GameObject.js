

class GameObject {
  constructor (config) {
    this.isPlayer = false

    this.x = config.x || 0;
    this.y = config.y || 0;
    this.frameWidth = config.frameWidth;
    this.frameHeight = config.frameHeight;

    this.sprite = new Sprite({
      gameObject: this,
      src: "./images/characters/people/hero.png"
    })
  }

  update () {
  }
} 
