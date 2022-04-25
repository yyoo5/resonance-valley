import { Tilemaps } from 'phaser';
import { NumericLiteral, ParenthesizedExpression } from 'typescript';
import EnemySprite from '../objects/EnemySprite';

export default class MainScene extends Phaser.Scene {
  platforms!: Phaser.GameObjects.Image;
  yoo!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    console.log(this.game.config.width);
    this.add.image(400, 320, 'background');

    const map = this.make.tilemap({ key: 'level-1' });
    const tileset = map.addTilesetImage('tileset', 'tiles', 32, 32, 0, 0);
    const platforms = map.createLayer('platforms', tileset);

    // Add collision
    platforms.setCollisionByProperty({ collides: true });
    // this.yoo.setCollideWorldBounds(true);

    this.yoo = this.physics.add.sprite(320, 208, 'main-character');
    this.anims.create({
      key: 'yoo-idle-right',
      frames: [{ key: 'main-character', frame: '1' }],
    });
    this.anims.create({
      key: 'yoo-idle-left',
      frames: [{ key: 'main-character', frame: '6' }],
    });
    this.anims.create({
      key: 'yoo-walk-right',
      frames: this.anims.generateFrameNames('main-character', {
        start: 7,
        end: 12,
      }),
      repeat: -1,
      frameRate: 15,
    });

    this.anims.create({
      key: 'yoo-walk-left',
      frames: this.anims.generateFrameNames('main-character', {
        start: 6,
        end: 1,
      }),
      repeat: -1,
      frameRate: 15,
    });

    // this.physics.world.setBounds(800, 600, background.width, background.height, )

    this.enemy1 = new EnemySprite(this, 700, 300, 'eliou');
    this.enemy1.body.setSize(this.enemy1.width * 0.8, this.enemy1.height * 0.8);
    // this.enemy2 = new EnemySprite(this, 100, 200, 'ghuds');

    this.physics.add.collider(this.yoo, platforms);
    this.physics.add.collider(this.enemy1, platforms);
    // this.physics.add.collider(this.enemy2, platforms);
    // this.physics.add.collider(this.yoo,);

    this.cameras.main.startFollow(this.yoo, true);
    this.cameras.main.zoom = 2.0;
  }

  update(t: number, dt: number) {
    if (!this.cursors || !this.yoo) {
      return;
    }
    const speed = 100;
    if (this.cursors.left.isDown) {
      this.yoo.anims.play('yoo-walk-left', true);
      this.yoo.setVelocity(-speed, 0);
    } else if (this.cursors.right.isDown) {
      this.yoo.anims.play('yoo-walk-right', true);
      this.yoo.setVelocity(speed, 0);
    } else {
      this.yoo.play('yoo-idle-right');
      // this.yoo.play('yoo-idle-left');
      this.yoo.setVelocity(0, 0);
    }
  }
}
