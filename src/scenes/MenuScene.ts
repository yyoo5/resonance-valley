export default class SecondScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  init() {}
  preload() {}

  create() {
    this.add.image(0, 0, 'dark-background').setDepth(0).setOrigin(0);
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 3,
        'title'
      )
      .setDepth(1);
    let playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 1.5,
        'start'
      )
      .setDepth(0);

    let creditButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 1.25,
        'credits-button'
      )
      .setDepth(0);
    this.add.image(400, 600, 'author');

    //add hover indicator
    let hoverImagePlay = this.add.image(250, 425, 'star');
    hoverImagePlay.setScale(1.2);
    hoverImagePlay.setVisible(false);

    let hoverImageCredit = this.add.image(300, 510, 'star');
    hoverImageCredit.setScale(0.75);
    hoverImageCredit.setVisible(false);

    //Main Scene
    playButton.setInteractive();
    playButton.on('pointerover', () => {
      hoverImagePlay.setVisible(true);
    });

    playButton.on('pointerout', () => {
      hoverImagePlay.setVisible(false);
    });

    playButton.on('pointerup', () => {
      // console.log('click and release');
      this.scene.start('StoryScene');
    });

    playButton.on('pointerdown', () => {
      console.log('just click');
    });

    // Credit Scene
    creditButton.setInteractive();
    creditButton.on('pointerover', () => {
      hoverImageCredit.setVisible(true);
    });

    creditButton.on('pointerout', () => {
      hoverImageCredit.setVisible(false);
    });

    creditButton.on('pointerup', () => {
      this.scene.start('CreditScene');
    });

    creditButton.on('pointerdown', () => {});
  }
  update() {}
}
