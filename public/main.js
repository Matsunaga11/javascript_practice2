new Vue({
  el: '#app',
  data: {
    todoListSet: [],
    input: "",
    options: [
      { value: -1, label: 'すべて' },
      { value: 0,  label: '作業中' },
      { value: 1,  label: '完了' }
    ],
    current: -1
  },
  methods: {
    addTodo: function($event) {
      this.todoListSet.push({
        id: this.todoListSet.length + 1,
        comment: this.input,
        state: 0,
        remain: true,
        visible: true
      });
      this.input="";
    },
    toggleCondition: function(todo){
      todo.state = todo.state ? 0 : 1
    },
    deleteTodo: function(todo) {
      var index = this.todoListSet.indexOf(todo);
      this.todoListSet.splice(index, 1);
    }
  },
  computed: {
    computedTodos: function() {
      return this.todoListSet.filter(function(todo) {
        return this.current < 0 ? true : this.current === todo.state
      }, this)
    },
    labels: function() {
      return this.options.reduce(function(optionSet, option) {
        return Object.assign(optionSet, { [option.value]: option.label })
      }, {})
  　}
  }
});
