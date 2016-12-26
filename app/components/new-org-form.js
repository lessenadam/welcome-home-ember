import Ember from 'ember';

const get = Ember.get;

export default Ember.Component.extend({
    organization: null,
    message: null,
    actions: {
        cancel() {
            // console.warn('canceling..');
            this.sendAction('cancel');
        },
        save() {
            // console.warn('submit');
            const org = get(this, 'organization');
            const message = get(this, 'message');
            // console.warn('org: %s, message: %s', org, message);
            this.sendAction('submit', org, message);
        }
    }
});
