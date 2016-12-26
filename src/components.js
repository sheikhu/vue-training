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


Vue.component('userForm', {

  template: `
  <form class="form">
    <h1>Identity</h1>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" name="firstname" v-model="user.firstname" class="form-control"/>
    </div>

    <div class="form-group">
    <label for="lastname">Last Name</label>

      <input type="text" name="lastname" v-model="user.lastname" class="form-control"/>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>`,

  props: {
    user: Object,
    default: {}
  }


});
