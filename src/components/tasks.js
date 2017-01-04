Vue.component('tasks', {
  template: '#tasks',

  props: {
    //list: { type: Array, required: false }
  },

  data() {
    return {
      tasks: [
        {'text': 'hello', done: false}
      ],
      onlyRemaining: false
    }
  },

  created() {

    Event.$on('task-added', (createdTask) => {
      console.log(createdTask)
      this.tasks.push(createdTask);
    });
  },

  mounted() {
    console.log(this);
  },

  methods: {

    deleteTask: function(i) {
      let task = this.tasks.splice(i, 1);
      Event.$emit('task-deleted', task);
    }
  },

computed: {
  remainingTasks() {
    return this.tasks.filter(function(t) {
      return !t.done;
    });
  },

  completedTasks() {
    return this.tasks.filter(function(t) {
      return t.done;
    });
  },

  data() {
    if(!this.onlyRemaining)
      return this.tasks;

    return this.remainingTasks;

  }

}
});
