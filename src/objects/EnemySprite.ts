export default class EnemySprite extends Phaser.Physics.Arcade.Sprite {
  enemyName: string | Phaser.Textures.Texture;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    enemyName: string | Phaser.Textures.Texture
  ) {
    super(scene, x, y, enemyName);

    this.setScale(0.5);

    this.enemyName = enemyName;

    this.makeAnimations();

    this.play(`${this.enemyName}-idle`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  private makeAnimations() {
    this.anims.create({
      key: `${this.enemyName}-idle`,
      frames: this.anims.generateFrameNames(this.enemyName, {
        prefix: `${this.enemyName}-`,
        start: 1,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
