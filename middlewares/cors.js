const whitelist = ['http://casa-node.local', 'http://debug.keys.casa', process.env.DEVICE_HOST];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = {
  corsOptions,
};
