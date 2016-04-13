if (process.env.NODE_ENV === 'production') {
  module.exports = require('./App.build.jsx');
} else {
  module.exports = require('./App.dev.jsx');
}
