var todoListSet = [];
new Vue({
  el: '#app',
  data: {
    title: 'ToDoリスト',
    todoListSet: todoListSet,
    input: "",
    picked: 'all'
  },
  methods: {
    addTodo: function($event) {
      todoListSet.push({
        id: this.todoListSet.length + 1,
        comment: this.input,
        condition: '作業中',
        remain: true,
        visible: true
      });
      this.input="";
    },
    toggleCondition: function($event){
      var target = $event.target.parentNode.parentNode;
      var todoId = target.getElementsByTagName("td")[0].textContent;
      var targetTodo = this.todoListSet.find((todo) => todo.id === parseInt(todoId, 10));
      if( $event.target.innerHTML === '作業中') {
        targetTodo.condition = '完了';
      } else {
        targetTodo.condition = '作業中';
      }

    },
    deleteTodo: function($event) {
　　   var target = $event.target.parentNode.parentNode;
      var todoId = target.getElementsByTagName("td")[0].textContent;
      var targetTodo = this.todoListSet.find((todo) => todo.id === parseInt(todoId, 10));
      targetTodo.remain = false;
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
