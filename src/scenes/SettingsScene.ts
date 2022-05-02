export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SettingsScene' });
  }

  init() {}
  preload() {}

  create() {
    let homeButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 3,
        'home'
      )
      .setDepth(1);
    let restartButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 1.5,
        'restart'
      )
      .setDepth(0);

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
