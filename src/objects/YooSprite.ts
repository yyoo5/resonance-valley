export default class YooSprite extends Phaser.Physics.Arcade.Sprite {
  private direction = 'right';
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private speed = 100;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'main-character');

    // this.setScale(0.5);

    // this.enemyName = enemyName;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.makeAnimations();
    this.play('yoo-idle-right');
    this.setCollideWorldBounds(true);

    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  protected preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta);

    if (this.cursors.left.isDown) {
      this.anims.play('yoo-walk-left', true);
      this.setVelocityX(-this.speed);

      this.direction = 'left';
      console.log('left: ', this.direction);
    } else if (this.cursors.right.isDown) {
      this.anims.play('yoo-walk-right', true);
      this.setVelocityX(this.speed);

      this.direction = 'right';
      console.log('right: ', this.direction);
    } else {
      console.log('else: ', `yoo-idle-${this.direction}`);
      this.anims.play(`yoo-idle-${this.direction}`, true);
      this.setVelocityX(0);
    }
  }

  private makeAnimations() {
    this.anims.create({
      key: 'yoo-idle-right',
      frames: this.anims.generateFrameNames('main-character', {
        start: 7,
        end: 7,
      }),
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: 'yoo-idle-left',
      frames: this.anims.generateFrameNames('main-character', {
        start: 1,
        end: 1,
      }),
      frameRate: 1,
      repeat: -1,
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
  }
}
