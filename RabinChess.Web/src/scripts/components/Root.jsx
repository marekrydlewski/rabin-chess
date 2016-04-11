if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.build.jsx');
} else {
  module.exports = require('./Root.dev.jsx');
}
