define([
  'backbone'
], function(Backbone) {
  var template = _.template('<form class="form-inline"><div class="form-group"><label for="exercises"><%= example %></label><input type="text" class="form-control" id="exercises"></div><button type="button" class="btn btn-default check">Проверить</button><p class="text-success">Правильно: <%= success %></p><p class="text-danger">Не правильно: <%= danger %></p></form>');

  /**
   * @class TestForm
   * @extends Backbone.View
   */
  return Backbone.View.extend({
    el      : $('div.row.content'),
    template: template,
    events  : {
      'click .check': 'setValue'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    setValue: function() {
      this.model.set('userValue', +this.$('#exercises').val(), {validate: true});
      this.model.checkResult();
    }
  });
});