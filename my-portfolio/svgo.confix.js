// svgo.config.js
module.exports = {
    plugins: [
      { name: 'preset-default' },
      { name: 'removeDimensions' },
      { name: 'removeViewBox', active: false },
    ],
  };
  