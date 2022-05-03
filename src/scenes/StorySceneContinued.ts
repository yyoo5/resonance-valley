export default class StorySceneContinued extends Phaser.Scene {
  constructor() {
    super({ key: 'StorySceneContinued' });
  }

  init() {}
  preload() {}

  create() {
    this.add.image(0, 0, 'dark-background').setDepth(0).setOrigin(0);
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        'story-2'
      )
      .setDepth(1);
    let nextButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 1.1,
        'next'
      )
      .setDepth(0);

    //add hover indicator
    let hoverImage = this.add.image(315, 580, 'star');
    hoverImage.setScale(0.75);
    hoverImage.setVisible(false);

    nextButton.setInteractive();
    nextButton.on('pointerover', () => {
      hoverImage.setVisible(true);
    });

    nextButton.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    nextButton.on('pointerup', () => {
      this.scene.start('ControlScene');
    });

    nextButton.on('pointerdown', () => {});
  }
  update() {}
}
