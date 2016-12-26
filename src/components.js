Vue.component('taskCounter', {
  template: `<span class="tag tag-pill tag-primary">{{ counter }}</span>`,
  data() {
    return {
      counter: 0
    }
  },

  created() {
    Event.$on('task-added', () => this.counter += 1);
    Event.$on('task-deleted', () => this.counter -= 1);
  },
  methods: {
    taskAdded() {
      this.counter += 1
    }
  }
});
