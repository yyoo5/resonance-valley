export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloderScene' });
  }

  preload() {
    this.load.image('background', 'assets/img/background/background.png');
    this.load.image('vision', 'assets/img/fog/vision.png');
    this.load.image(
      'dark-background',
      'assets/img/background/background-dark.png'
    );
    this.load.image('title', 'assets/img/title/title.png');
    this.load.image('start', 'assets/img/title/start.png');
    this.load.image('author', 'assets/img/title/author.png');
    this.load.image('credits-button', 'assets/img/title/credits-button.png');
    this.load.image('credits', 'assets/img/title/credits.png');
    this.load.image('home', 'assets/img/title/home.png');
    this.load.image('story', 'assets/img/title/story.png');
    this.load.image('next', 'assets/img/title/next.png');
    this.load.image('controls', 'assets/img/title/controls.png');
    this.load.image('home', 'assets/img/settings/home.png');
    this.load.image('restart', 'assets/img/settings/restart.png');

    this.load.audio('background-music', 'assets/audio/bgm.mp3');
    this.load.audio('jump', 'assets/audio/jump.wav');

    this.load.atlas(
      'main-character',
      'assets/img/main-character/main-character.png',
      'assets/img/main-character/main-character.json'
    );
    this.load.atlas(
      'ghuds',
      'assets/img/ghuds/ghuds.png',
      'assets/img/ghuds/ghuds.json'
    );
    this.load.atlas(
      'eliou',
      'assets/img/eliou/eliou.png',
      'assets/img/eliou/eliou.json'
    );
    this.load.atlas(
      'star',
      'assets/img/star/star.png',
      'assets/img/star/star.json'
    );
    this.load.image('tiles', 'assets/img/tiles/tileset.png');
    this.load.tilemapTiledJSON('level-1', 'assets/img/tiles/level-1.json');
  }

  create() {
    this.scene.start('MenuScene');
  }
}
