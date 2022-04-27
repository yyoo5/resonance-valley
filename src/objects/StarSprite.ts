export default class StarSprite extends Phaser.Physics.Arcade.Sprite {
  star: string | Phaser.Textures.Texture;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    star: string | Phaser.Textures.Texture
  ) {
    super(scene, x, y, star);

    this.setScale(0.5);

    this.star = star;

    this.makeAnimations();

    this.play(`${this.star}-idle`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  private makeAnimations() {
    this.anims.create({
      key: `${this.star}-idle`,
      frames: this.anims.generateFrameNames(this.star, {
        prefix: `${this.star}-`,
        start: 1,
        end: 8,
      }),
      frameRate: 5,
      repeat: -1,
    });
  }
}
