
var data = {
    tasks : [
        { text: 'Check design patterns', done: true },
        { text: 'Workout', done: false },
        { text: 'Got to store', done: true }
    ]
};

new Vue({
    el: '#app',
    data: data
});

Vue.config.devtools = true