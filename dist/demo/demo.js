var GridPhysicsPlugin = require('plugin');

var game = new Phaser.Game({
  antialias: false,
  parent: 'content',
  renderer: Phaser.CANVAS,
  state: {
    init: function () {
      this.game.gridPhysicsPlugin = this.game.plugins.add(GridPhysicsPlugin);
    },
    create: function () {
      var plugin = this.game.gridPhysicsPlugin;
      var title = this.add.text(10, 10, 'Grid Physics Plugin', {fill: 'white', font: '16px monospace'});

      for (key of Object.keys(plugin)) {
        title.text += '\n' + key + ': ' + plugin[key];
      }
    }
  }
});
