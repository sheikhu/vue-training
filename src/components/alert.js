Vue.component('alert', {

    template: '#alert',

    props: {
        type: String,
        message: String,
        header: String,

        dismissible: Boolean
    },

    data() {
      return {
        visible: true
      }
    },

    methods: {
        close: function() {
            this.$emit('close');
            this.visible = false;
        }
    },

    computed: {
      alertClass:function() {
        let classAlert = `alert alert-${this.type}`;

        return this.dismissible ? `${classAlert} alert-dismissible` : classAlert;
      }
    }
});
