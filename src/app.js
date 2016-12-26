var data = {
  tasks: [{
    text: 'Check design patterns',
    done: true
  }, {
    text: 'Workout',
    done: false
  }, {
    text: 'Got to store',
    done: true
  }],

  task: {},

  user: {},
  visible: true
};

Vue.filter('capitalize', function(value) {
  return value.toUpperCase();
});

Vue.directive('autofocus', {
  inserted: function(el) {
    el.focus();
  }
});

var vm = new Vue({
  el: '#app',
  data: data,
  components: {
    
},
  methods: {

    mounted: function() {
      console.log(this.visible);
    },
    createTask: function(task) {
      task.done = false;
      this.tasks.push({
        done: false,
        text: task.text
      });
      this.task = {};
    },
    deleteTask: function(i) {
      this.tasks.splice(i, 1);
    },

    hide: function() {
      this.visible = false;
    }
  },
  computed: {
    remainingTasks: function() {
      return this.tasks.filter(function(t) {
        return !t.done;
      });
    },

    completedTasks: function() {
      return this.tasks.filter(function(t) {
        return t.done;
      });
    },
  }
});
