import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'ul',

    actions: {
        addNew() {
            console.warn('detecected click on new');
            this.sendAction('createNewClick');
        },

        itemClick(item) {
            this.sendAction('itemClick', item);
        },

        delete(item) {
            console.warn(item);
        },
        showModal(name, item) {
            this.sendAction('showModal', name, item);
        }
    }
});
