
var data = {
    message: 'Hello World !',
    counter: 5,
    plans: [
    { name: 'Entreprise', price: 100 },
    { name: 'Pro', price: 50 },
    { name: 'Personal', price: 10 },
    { name: 'Free', price: 0 },
    ],
    active: {}
};

new Vue({
    el: '#app',
    data: data,
    methods: { 
        submit: function() {
            alert('Ok');                    
        }
    }, 

    components: {
        counter: {
            template: '#counter-tpl',
            props: {
                label: {default: '<Label>'},
                step: { type: Number, default: 1 }
            },
            data: function() {
                return {
                    count : 0                                
                };
            }, 
            methods: {
                increment: function() {
                    this.count += this.step;
                }
            }
        },

        plan: {
            props: {
                plan: {
                    type: Object
                },
                active: {
                    type: Object
                }
            },
            methods: {
                setActivePlan: function(e) {
                    this.active = this.plan;
                }
            },
            computed: {
                isUpgrade: function() {
                    return this.plan.price > this.active.price;
                }
            }
        }
    }
});