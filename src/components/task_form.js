
Vue.component('taskForm', {

  template: `
  <form class="form" @submit.prevent="createTask(task)">
    <div class="form-group">
      <label>Task name</label>
      <input type="text" name="text" v-model="task.text" class="form-control" placeholder="Task description" v-autofocus/>
    </div>
    <button class="btn btn-primary" type="submit">Create task</button>

  </form>`,


  data() {
    return {
      task : {}
    }
  },
  methods: {
    createTask: function(task) {
      task.done = false;
      // this.tasks.push({
      //   done: false,
      //   text: task.text
      // });
      this.task = {};

      Event.$emit('task-added', {
          done: false,
          text: task.text
        });
    }
  }

  });
