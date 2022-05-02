export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SettingsScene' });
  }

  init() {}
  preload() {}

  create() {
    let homeButton = this.add
      .image(
        this.game.renderer.width / 1.07,
        this.game.renderer.height / 11.07,
        'home-icon'
      )
      .setDepth(1)
      .setScale(0.5);
    let restartButton = this.add
      .image(
        this.game.renderer.width / 1.07,
        this.game.renderer.height / 6.07,
        'restart'
      )
      .setDepth(0)
      .setScale(0.5);

    //Home button
    homeButton.setInteractive();
    homeButton.on('pointerover', () => {});

    homeButton.on('pointerout', () => {});

    homeButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });

    homeButton.on('pointerdown', () => {});

    //Restart button
    restartButton.setInteractive();
    restartButton.on('pointerover', () => {});

    restartButton.on('pointerout', () => {});

    restartButton.on('pointerup', () => {
      this.scene.start('MainScene');
    });

    restartButton.on('pointerdown', () => {});
  }
  update() {}
}
