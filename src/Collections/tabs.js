define([
  'backbone',
  'Models/tabModel'
], function(Backbone, TabModel) {

  /**
   * @class Tabs
   * @extends Backbone.Collection
   */
  return Backbone.Collection.extend({
    model: TabModel
  });
});