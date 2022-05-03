import 'phaser';
import MenuScene from './scenes/MenuScene';
import StoryScene from './scenes/StoryScene';
import CreditScene from './scenes/CreditScene';
import MainScene from './scenes/MainScene';
import PreloaderScene from './scenes/PreloaderScene';
import ControlScene from './scenes/ControlScene';
import SettingsScene from './scenes/SettingsScene';
import ControlSceneContinued from './scenes/StorySceneContinued';
import LevelOneComplete from './scenes/LevelOneComplete';
import LevelTwo from './scenes/LevelTwo';

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
  scene: [
    PreloaderScene,
    MenuScene,
    StoryScene,
    ControlScene,
    ControlSceneContinued,
    CreditScene,
    MainScene,
    LevelOneComplete,
    LevelTwo,
    SettingsScene,
  ],
  render: {
    pixelArt: true,
  },
};

new Phaser.Game(config);
