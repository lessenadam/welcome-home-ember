import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createOrg(org, message) {
            const record = this.store.createRecord('org', {
                name: org, 
                message: message
            });
            record.save().then(() => this.transitionTo('home'));
        },
        cancelUserCreation() {
            this.transitionTo('home');
        }
    }
});
