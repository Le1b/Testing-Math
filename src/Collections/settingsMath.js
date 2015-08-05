define([
  'backbone',
  'Models/settingsMathOperation'
], function(Backbone, SettingsMathOperation) {

  /**
   * @class SettingsMath
   * @extends Backbone.Collection
   */
  return Backbone.Collection.extend({
    model: SettingsMathOperation
  });
});