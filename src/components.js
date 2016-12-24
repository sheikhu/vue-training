Vue.component('alert', {

    template: '#alert',

    props: {
        type: String,
        message: String,
        header: String,
        visible: Boolean
    },

    methods: {
        close: function() {
            this.$emit('close');
        }
    }
});
