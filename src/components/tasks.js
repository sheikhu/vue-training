Vue.component('tasks', {
  template: '#tasks',

  props: {
    list: { type: Array }
  },

  data() {
    return {
      task: {},
      tasks: []
    }
  },

  created() {
    Event.$on('task-added', (task) => {
      this.tasks.push(task);
    });
  },

  mounted() {
    this.tasks = this.list
  },

  methods: {

    onTaskAdded(task) {
      console.log(task)
      this.tasks.push(task);
    },
    deleteTask: function(i) {
      let task = this.tasks.splice(i, 1);
      Event.$emit('task-deleted', task);
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
