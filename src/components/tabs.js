
Vue.component('tab', {

  mounted() {
    this.isActive = this.active;
  },
  template: `<div v-show="isActive"><slot></slot></div>`,
  props: {
    name: { required: true },
    active: { default: false }
  },
  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  }
} );

Vue.component('tabs', {
  template: `<div>
    <ul class="nav nav-tabs" role="tablist">


      <li class="nav-item" v-for="tab in tabs">
        <a :id="tab.href" @click.prevent="selectTab(tab)" class="nav-link" :class="{ active: tab.active}" data-toggle="tab" :href="tab.href" role="tab"> {{ tab.name }}</a>
      </li>

      </ul>




    <div class="tab-content"><slot></slot></div>

    </div>
    `,

    created() {
      this.tabs = this.$children;

    },

    data() {
      return {
        tabs: []
      }
    },

    methods: {

      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name == selectedTab.name;
        });

        this.$emit('tab-selected', selectedTab);
      }
    }

  } );
