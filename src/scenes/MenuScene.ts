export default class SecondScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  init() {}
  preload() {}

  create() {
    this.add.image(0, 0, 'dark-background').setOrigin(0);
  }
  update(time: number, delta: number): void {}
}
