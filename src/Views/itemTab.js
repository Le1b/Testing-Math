define(['backbone'], function(Backbone) {

  var template = _.template('<a href="#<%= link %>"><%= title %></a>');
  /**
   * @class ItemTab
   * @extends Backbone.View
   */
  var ItemTab = Backbone.View.extend({
    tagName : 'li',
    template: template,

    events: {
      'click': 'showContent'
    },

    render: function() {
      this.$el.attr('role', 'presentation');
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    showContent: function() {
      $('ul.nav.nav-tabs li').removeClass('active');
      this.$el.addClass('active');
      this.toggleView();
    },

    toggleView: function() {
      if (this.model.get('link') === 'testUser') {
        $('div.row.content').removeClass('hide');
        $('div.row.settings').addClass('hide');
      } else {
        $('div.row.settings').removeClass('hide');
        $('div.row.content').addClass('hide');
      }

    }
  });

  return ItemTab;
});