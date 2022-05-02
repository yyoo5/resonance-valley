import 'phaser';
import MenuScene from './scenes/MenuScene';
import CreditScene from './scenes/CreditScene';
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
  scene: [PreloaderScene, MenuScene, CreditScene, MainScene],
  render: {
    pixelArt: true,
  },
};

new Phaser.Game(config);
