import 'phaser';
import MainScene from './scenes/MainScene';
import PreloaderScene from './scenes/PreloaderScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200, x: 0 },
      debug: true,
    },
  },
  scene: [PreloaderScene, MainScene],
};

new Phaser.Game(config);
