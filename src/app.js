window.Event = new Vue();

var data = {

  tasks: [{
    text: 'Check design patterns',
    done: true
  }],
  task: {},

  user: {},
  visible: true
};

Vue.filter('capitalize', function(value) {
  return value.toUpperCase();
});


var vm = new Vue({
  el: '#app',
  data: data,


  methods: {

    onTaskAdded(task) {
      alert('task added');
    },
    onTaskDeleted() {
      alert('task deleted');
    },
    onTabSelected(e) {
      console.log(e)
    }
  }
});
