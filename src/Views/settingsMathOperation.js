define([
  'backbone'
], function(Backbone) {
  var template = _.template('<label><input type="checkbox" value="<%= operation %>"> <%= title %></label>');

  /**
   * @class SettingsMathOperation
   * @extends Backbone.View
   */
  return Backbone.View.extend({
    template : template,
    className: 'checkbox',
    events   : {
      'click input': 'updateModel'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    updateModel: function(e) {
      this.model.set('isTesting', this.$el.find('input')[0].checked);

      return this;
    }
  });
});