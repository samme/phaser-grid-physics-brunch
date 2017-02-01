// See http://brunch.io for documentation.

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'index.js': /^app/,
        'vendor.js': /^(?!app)/
      }
    }
  },
  npm: {
    static: ['node_modules/phaser-ce/build/phaser.js']
  },
  paths: {
    public: 'dist'
  },
  plugins: {
    babel: {
      ignore: /^(bower_components|node_modules|vendor)/
    }
  }
};
