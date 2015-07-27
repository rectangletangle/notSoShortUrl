
isProd = Boolean(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL);

port = 5000;

module.exports = {
  port: port,

	shortPath: '/s/',

	db: { 
		url: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/notshort'
	},

	srvr: {
		domain: isProd ? 'https://notshort.herokuapp.com' : 'http://localhost:' + port
  }	
};

