export default class CreditScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CreditScene' });
  }

  init() {}
  preload() {}

  create() {
    this.add.image(0, 0, 'dark-background').setDepth(0).setOrigin(0);
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        'credits'
      )
      .setDepth(1)
      .setScale(0.8);
    let backButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 1.1,
        'home'
      )
      .setDepth(0);

    //add hover indicator
    let hoverImage = this.add.image(315, 580, 'star');
    hoverImage.setScale(0.75);
    hoverImage.setVisible(false);

    backButton.setInteractive();
    backButton.on('pointerover', () => {
      hoverImage.setVisible(true);
    });

    backButton.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    backButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });

    backButton.on('pointerdown', () => {});
  }
  update() {}
}
