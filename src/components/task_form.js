
Vue.component('taskForm', {

  template: `
  <form class="form" @submit.prevent="createTask(task)">
    <fieldset>
      <legend>Create task </legend>
      <div class="form-group">
        <input type="text" name="text" v-model="task.text" class="form-control" placeholder="Task description"/>
      </div>
    </fieldset>
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


      Event.$emit('task-added', {
          done: false,
          text: task.text
        });

      this.task = {};
    }
  }

  });
