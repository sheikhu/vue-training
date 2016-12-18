
var data = {
    tasks : [
        { text: 'Check design patterns', done: true },
        { text: 'Workout', done: false },
        { text: 'Got to store', done: true }
    ],

    text: ''
};

new Vue({
    el: '#app',
    data: data,
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