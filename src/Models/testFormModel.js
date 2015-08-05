define([
  'backbone'
], function(Backbone) {
  /**
   * @class TestFormModel
   * @extends Backbone.Model
   */
  return Backbone.Model.extend({
    defaults: {
      success   : 0,
      danger    : 0,
      example   : null,
      operations: [],
      value     : null,
      userValue : null
    },

    initialize: function() {
      this.generateExample();
    },

    generateExample: function() {
      while (true) {
        var a = Math.round(Math.random() * 100);
        var b = Math.round(Math.random() * 100);
        var operation = this.get('operations')[Math.floor(Math.random() * this.get('operations').length)];


        var res = eval('' + a + operation + b);
        if (res < 100 && res > 0 && a % b === 0) {
          this.set('example', '' + a + operation + b);
          this.set('value', res);
          break;
        }
      }
    },

    checkResult: function() {
      if (!/^\d{0,}$/.test(this.get('userValue'))) {
        alert('Введенное значение не число');
        return;
      }

      if (this.get('value') === this.get('userValue')) {
        this.set('success', this.get('success') + 1);
      } else {
        this.set('danger', this.get('danger') + 1);
      }
      this.generateExample();
      return this;
    }
  });
});