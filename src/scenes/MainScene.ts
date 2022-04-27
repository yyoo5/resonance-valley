import { Tilemaps } from 'phaser';
import EnemySprite from '../objects/EnemySprite';
import YooSprite from '../objects/YooSprite';
import StarSprite from '../objects/StarSprite';

export default class MainScene extends Phaser.Scene {
  // private platforms!: Phaser.GameObjects.Image;
  // yoo!: Phaser.Types.Physics.Arcade.Sprite;
  // private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  // private speed = 100;
  private yoo!: YooSprite;
  private platforms!: Tilemaps.TilemapLayer;
  private enemy1!: EnemySprite;
  private star!: StarSprite;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    console.log(this.game.config.width);
    this.add.image(400, 320, 'background');
    this.add.image(200, 200, 'vision');

    const map = this.make.tilemap({ key: 'level-1' });
    const tileset = map.addTilesetImage('tileset', 'tiles', 32, 32, 0, 0);
    this.platforms = map.createLayer('platforms', tileset);

    this.cameras.main.setBounds(0, 0, 800, 640);
    this.physics.world.setBounds(0, 0, 800, 640);

    // Add collision
    this.platforms.setCollisionByProperty({ collides: true });

    // Add main character and animation
    // this.yoo = this.physics.add.sprite(320, 208, 'main-character');
    this.yoo = new YooSprite(this, 200, 600);

    // Add Eliou
    this.enemy1 = new EnemySprite(this, 700, 300, 'eliou');
    this.enemy1.body.setSize(this.enemy1.width * 0.8, this.enemy1.height * 0.8);
    // this.enemy2 = new EnemySprite(this, 100, 200, 'ghuds');

    // Add Star
    this.star = new StarSprite(this, 200, 80, 'star');

    //Add collision
    this.physics.add.collider(this.yoo, this.platforms);
    this.physics.add.collider(this.enemy1, this.platforms);
    this.physics.add.collider(this.star, this.platforms);
    // this.physics.add.collider(this.enemy2, platforms);
    // this.physics.add.collider(this.yoo,);

    const width = this.scale.width;
    const height = this.scale.height;

    // make a RenderTexture that is the size of the screen
    const rt = this.make.renderTexture({ width, height }, true);

    // fill it with black
    rt.fill(0x000000, 1);

    // draw the floorLayer into it
    rt.draw(this.platforms);

    // TODO: Do we need to add the background layer to rt.draw() too?

    // set a dark blue tint
    rt.setTint(0x0a2948);

    const vision = this.make.image({
      x: this.yoo.x,
      y: this.yoo.y,
      key: 'vision',
      add: false,
    });
    vision.scale = 1.5;

    rt.mask = new Phaser.Display.Masks.BitmapMask(this, vision);
    rt.mask.invertAlpha = true;

    //Add Camera and zoom
    this.cameras.main.startFollow(this.yoo, true);
    this.cameras.main.zoom = 2.0;
  }

  update() {
    if (this.vision) {
      this.vision.x = this.yoo.x;
      this.vision.y = this.yoo.y;
    }
  }
}
