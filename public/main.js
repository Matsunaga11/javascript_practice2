new Vue({
  el: '#app',
  data: {
    todoListSet: [],
    input: "",
    picked: 'all'
  },
  methods: {
    addTodo: function($event) {
      this.todoListSet.push({
        id: this.todoListSet.length + 1,
        comment: this.input,
        condition: '作業中',
        remain: true,
        visible: true
      });
      this.input="";
    },
    toggleCondition: function(todo){
      if( todo.condition === '作業中') {
        todo.condition = '完了';
      } else {
        todo.condition = '作業中';
      }
    },
    deleteTodo: function(todo) {
      var index = this.todoListSet.indexOf(todo);
      this.todoListSet.splice(index, 1);
    },
    filterTodo: function(filterCondition) {
      var inProgress = this.todoListSet.filter(function(value) {
        return value.condition ==='作業中';
      });
      var done = this.todoListSet.filter(function(value) {
        return value.condition ==='完了';
      });

      if (filterCondition === 'inProgress') {
        inProgress.forEach(function(value) {
          value.visible = true;
        });
        done.forEach(function(value) {
          value.visible = false;
        });
      } else if (filterCondition === 'done') {
        inProgress.forEach(function(value) {
          value.visible = false;
        });
        done.forEach(function(value) {
          value.visible = true;
        });
      } else {
        this.todoListSet.forEach(function(value) {
          value.visible = true;
        })
      }
    }
  }
});
