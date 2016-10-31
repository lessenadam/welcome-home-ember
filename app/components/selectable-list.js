import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'ul',

    actions: {
        addNew() {
            console.warn('detecected click on new');
            this.sendAction('createNewClick');
        },

        itemClick(item) {
            console.warn('detected click on:', item);
            this.sendAction('itemClick', item)
        }
    }
});
