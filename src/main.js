requirejs.config({
  paths: {
    jquery            : 'libs/jquery',
    backbone          : 'libs/backbone',
    underscore        : 'libs/underscore',
    bootstrap         : 'libs/bootstrap',
    backboneValidation: 'libs/backbone-validation'
  },

  shim: {
    'backbone'          : {
      deps   : ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backboneValidation': {
      deps: ['backbone', 'underscore']
    },
    'underscore'        : {
      exports: '_'
    },
    'bootstrap'         : {
      deps   : ['jquery'],
      exports: 'Bootstrap'
    }
  }
});

require([
    'app',
    'bootstrap'],
  function(App, Bootstrap) {
    App.initialize();
  });