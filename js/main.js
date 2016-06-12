var Wmandrel = Wmandrel || {};

//initiate the Phaser framework
Wmandrel.game = new Phaser.Game(360, 592, Phaser.AUTO);

Wmandrel.game.state.add('GameState', Wmandrel.GameState);
Wmandrel.game.state.add('HomeState', Wmandrel.HomeState);
Wmandrel.game.state.add('BootState', Wmandrel.BootState);
Wmandrel.game.state.start('BootState');
