define([
  'backbone'
], function(Backbone) {
  /**
   * @class TabModel
   * @extends Backbone.Model
   */
  return Backbone.Model.extend({
    defaults: {
      link : '',
      title: ''
    }
  });
});