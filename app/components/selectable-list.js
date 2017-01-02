import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;

export default Ember.Component.extend({
    tagName: 'ul',

    classNames: ['selectable-list'],

    selection: null,

    list: null,

    itemsToDisplay: Ember.computed('selection', 'list', function() {
        const orgs = this.get('list');
        console.warn('computing listToDisplay...');
        const selection = this.get('selection');
        if (orgs) {
            orgs.forEach(org => {
                if (org === selection) {
                    set(org, 'selected', true);
                } else {
                    set(org, 'selected', false);
                }
            });
            return orgs;
        } else {
            return null;
        }
    }),

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
