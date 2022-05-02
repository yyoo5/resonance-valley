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

    this.load.audio('bgm', 'assets/audio/bgm.mp3');

    //loading bar
    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff, //white
      },
    });

    // //simulate large loading
    // for (let i = 0; i < 100; i++)

    this.load.on('progress', (percent) => {
      loadingBar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
      console.log(percent);
    });

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
    // this.scene.start('MainScene');
    this.scene.start('MenuScene');
  }
}
