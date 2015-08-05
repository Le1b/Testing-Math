define([
  'backbone',
  'Views/itemTab'
], function(Backbone, ItemTab) {
  /**
   * @class Tabs
   * @extends Backbone.View
   */
  return Backbone.View.extend({
    el: $('ul.nav.nav-tabs'),

    render: function() {
      _(this.collection.models).each(function(row) {
        this.$el.append(new ItemTab({model: row}).render().el);
      }, this);

      return this;
    }
  });
});