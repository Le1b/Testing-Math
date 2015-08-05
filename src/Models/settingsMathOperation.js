define([
  'backbone'
], function(Backbone) {
  /**
   * @class SettingsMathOperation
   * @extends Backbone.Model
   */
  return Backbone.Model.extend({
    defaults: {
      operation: '',
      title    : '',
      isTesting: false
    }
  });
});