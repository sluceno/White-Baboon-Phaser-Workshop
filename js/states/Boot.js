var Wmandrel = Wmandrel || {};

//setting game configuration and loading the assets for the loading screen
Wmandrel.BootState = {
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = "#0B6138";
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    
    this.game.state.start('HomeState');
  }
};
