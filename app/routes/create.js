import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createOrg(org, message) {
            console.warn('cathcing in create route. org: %s, msg: %s', org, message);
            const record = this.store.createRecord('org', {
                name: org, 
                message: message
            });
            console.warn('record', record);
            record.save().then(() => this.transitionTo('home'));
        },
        cancelUserCreation() {
            console.warn('cathcing cancel in create route');
            this.transitionTo('home');
        }
    }
});
