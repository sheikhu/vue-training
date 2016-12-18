
var data = {
    tasks : [
        { text: 'Check design patterns', done: true },
        { text: 'Workout', done: false },
        { text: 'Got to store', done: true }
    ]
};

new Vue({
    el: '#app',
    data: data,
    methods: {
        remainingTasks: function() {
            return this.tasks.filter(function(t) {
                console.log(t);
                return ! t.done;
            });
        }
    }
});

Vue.config.devtools = true