
config = require('./config');
views = require('./views');

module.exports = { 
  set: function (app) {
    app.get('/', views.index);
    app.get(config.shortPath + ':id', views.forward);

    app.post('/urls/', views.shorten);      
  }
};

