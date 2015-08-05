define([
  'backbone',
  'Views/settingsMathOperation'
], function(Backbone, SettingsMathOperation) {

  /**
   * @class SettingsMathView
   * @extends Backbone.View
   */
  return Backbone.View.extend({
    el: $('div.row.settings'),

    render: function() {
      _(this.collection.models).each(function(item) {
        this.$el.append(new SettingsMathOperation({model: item}).render().el);
      }, this);

      return this;
    }
  });
});