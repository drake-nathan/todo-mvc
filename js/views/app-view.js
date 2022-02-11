/* eslint-disable no-undef */
AppView = Backbone.View.extend({
  el: '.todoapp',

  event: {
    'keypress .new-todo': 'createOnEnter',
  },

  initialize() {
    this.$input = this.$('.new-todo');
    this.$list = $('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  createOnEnter() {
    console.log('Create!');
  },
});
