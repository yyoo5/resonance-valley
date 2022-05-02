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
    this.add.image(400, 600, 'author');

    //add hover indicator
    let hoverImage = this.add.image(250, 425, 'star');
    hoverImage.setScale(1.2);
    hoverImage.setVisible(false);

    //add music
    this.sound.play('background-music', {
      loop: true,
      volume: 0.25,
    });

    //pointer events
    //pointerover - hovering
    //pointerout - not hovering
    //pointerup - click and release
    //pointerdown - just click

    playButton.setInteractive();
    playButton.on('pointerover', () => {
      hoverImage.setVisible(true);
    });

    playButton.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playButton.on('pointerup', () => {
      console.log('click and release');
    });

    playButton.on('pointerdown', () => {
      console.log('just click');
    });
  }
  update(time: number, delta: number): void {}
}
