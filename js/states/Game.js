var Wmandrel = Wmandrel || {};

Wmandrel.GameState = {
  //initiate game settings
  init: function() {
    //adapt to screen size, fit all the game
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  //load the game assets before the game starts
  preload: function() {
    this.load.image('ground', 'assets/images/ground.png');

    //Load platform

    this.load.image('goal', 'assets/images/gorilla3.png');

    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 28, 30, 5, 1, 1);
  },
  //executed after everything is loaded
  create: function() {
    this.ground = this.add.sprite(0, 522, 'ground');

    //ADD platform

    //ADD player
    //Set player anchor to 0.5
  },
  update: function() {

  }

};
