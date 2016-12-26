import Ember from 'ember';

export default Ember.Component.extend({
    isEditing: false,

    selection: null,

    name: null,
    message: null,

    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this._super(...arguments);
        const name = this.get('selection.name');
        const message = this.get('selection.message');
        this.setProperties({
            name,
            message
        });
    },

    actions: {
        enterEditMode() {
            console.warn('edit mode');
            this.set('isEditing', true);
        },
        cancel() {
            console.warn('cancel');
            this.setProperties({
                name: this.get('selection.name'),
                message: this.get('selection.message')
            });
            this.set('isEditing', false);
        },
        save() {
            console.warn('save');
            const selection = this.get('selection');
            selection.setProperties({
                message: this.get('message'),
                name: this.get('name')
            });
            selection.save()
                .then(response => {
                    console.warn('update repsonse:', response);
                    debugger;
                    this.set('isEditing', false);
                })
                .catch(err => console.error('Site defined error:', err));
            // properties are stored in state
            // mirage update
        }
    }

});
