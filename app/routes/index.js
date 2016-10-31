import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;

export default Ember.Route.extend({
    beforeModel() {
        this.replaceWith('home');
    }
});
