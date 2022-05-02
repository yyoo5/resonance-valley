import { Tilemaps } from 'phaser';
import EnemySprite from '../objects/EnemySprite';
import YooSprite from '../objects/YooSprite';
import StarSprite from '../objects/StarSprite';

export default class MainScene extends Phaser.Scene {
  private yoo!: YooSprite;
  private platforms!: Tilemaps.TilemapLayer;
  private enemy1!: EnemySprite;
  private star!: StarSprite;
  vision!: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {}

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
    this.yoo = new YooSprite(this, 200, 600);

    // Add Eliou
    this.enemy1 = new EnemySprite(this, 700, 300, 'eliou');
    this.enemy1.body.setSize(this.enemy1.width * 0.8, this.enemy1.height * 0.8);

    // Add Star
    this.star = new StarSprite(this, 200, 80, 'star');

    //add music
    this.sound.play('background-music', {
      loop: true,
      volume: 0.25,
    });

    //Add collision
    this.physics.add.collider(this.yoo, this.platforms);
    this.physics.add.collider(this.enemy1, this.platforms);
    this.physics.add.collider(this.star, this.platforms);

    const width = this.scale.width;
    const height = this.scale.height;

    //add fog of war
    const rt = this.make.renderTexture({ width, height }, true);
    rt.fill(0x000000, 1);

    this.vision = this.make.image({
      x: this.yoo.x,
      y: this.yoo.y,
      key: 'vision',
      add: false,
    });
    this.vision.scale = 1.5;

    rt.mask = new Phaser.Display.Masks.BitmapMask(this, this.vision);
    rt.mask.invertAlpha = true;

    //Add Camera and zoom
    this.cameras.main.startFollow(this.yoo, true);
    this.cameras.main.zoom = 2.0;

    //add sound effect
  }

  update() {
    if (this.vision) {
      this.vision.x = this.yoo.x;
      this.vision.y = this.yoo.y;
    }
  }
}
