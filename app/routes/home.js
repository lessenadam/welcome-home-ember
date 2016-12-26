import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;

// let orgs = [{
//         name: 'Home',
//         message: 'Welcome home, Adam!'
//     }, {
//         name: 'Dungeon',
//         message: 'Watch out, you are in the dungeon, Adam!'
//     },
// ];

export default Ember.Route.extend({
    model() {
        console.warn('in model');
        return this.get('store').findAll('org');
    },

    // what about computing observing changes to the store

    setupController(controller, model) {
        console.warn('in setupController');
        this._super(controller, model);

        set(controller, 'organizations', model);
    },

    actions: {
        handleClick(org) {
            set(this.controllerFor('home'), 'selection', org);
        },

        createNew() {
            this.transitionTo('create');
        }

    }
});
