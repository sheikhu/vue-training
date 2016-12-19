
var data = {
    tasks : [
        { text: 'Check design patterns', done: true },
        { text: 'Workout', done: false },
        { text: 'Got to store', done: true }
    ],

    task: {},

    text: ''
};

Vue.filter('capitalize', function(value) {
    return value.toUpperCase();
});

Vue.directive('autofocus', {
    inserted: function(el) {
        el.focus();
    }
})

var vm = new Vue({
    el: '#app',
    data: data,

    methods: {
        createTask: function(task) {
            this.task.done = false;
            this.tasks.push(task);
            this.task = {};
        },
        deleteTask: function(i) {
            this.tasks.splice(i, 1);
        }
    },
    computed: {
        remainingTasks: function() {
            return this.tasks.filter(function(t) {
                return ! t.done;
            });
        },

        completedTasks: function() {
            return this.tasks.filter(function(t) {
                return t.done;
            });
        },
    }
});

Vue.config.devtools = true