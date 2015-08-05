define([
  'backbone',
  'Views/tabs',
  'Collections/tabs',
  'Views/settingsMath',
  'Collections/settingsMath',
  'Views/testForm',
  'Models/testFormModel'
], function(Backbone, TabsView, TabsCollection, SettingsMathView, SettingsMath, TestForm, TestFormModel) {
  /**
   * @class App
   */
  var App = {
    cache: {
      testUser: null,
      settings: null
    },

    initialize: function() {
      var AppRouter = Backbone.Router.extend({
        routes: {
          'testUser': 'testUser',
          'settings': 'settings'
        },

        testUser: function() {
          if (App.cache.settings === null) return;

          var operations = [];
          _(App.cache.settings.collection.models).each(function(item) {
            if (item.get('isTesting')) operations.push(item.get('operation'));
          });

          if (App.cache.testUser === null) {
            var model = new TestFormModel({
              operations: operations
            });

            App.cache.testUser = new TestForm({
              model: model
            }).render();
          }
        },

        settings: function() {
          var operations = [
            {
              operation: '+',
              title    : 'Сложение',
              isTesting: false
            },
            {
              operation: '-',
              title    : 'Вычитание',
              isTesting: false
            },
            {
              operation: '*',
              title    : 'Умножение',
              isTesting: false
            },
            {
              operation: '/',
              title    : 'Деление',
              isTesting: false
            }
          ];

          App.cache.settings = App.cache.settings !== null ? App.cache.settings : new SettingsMathView({collection: new SettingsMath(operations)}).render();
        }
      });

      new AppRouter();
      Backbone.history.start();

      var tabs = [
        {
          title: 'Проверка',
          link : 'testUser'
        },
        {
          title: 'Установки',
          link : 'settings'
        }
      ];
      new TabsView({collection: new TabsCollection(tabs)}).render();
    }
  };

  return App;
});