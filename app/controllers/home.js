import Ember from 'ember';

var set = Ember.set;
var get = Ember.get;

export default Ember.Controller.extend({
    selection: null,

    organizations: null,

    // orgsToDisplay: Ember.computed('selection', 'organizations', () => {
    //     const orgs = get(this, 'organizations');
    //     console.warn('computing orgsToDisplay...');
    //     const selection = get(this, 'selection');
    //     if (orgs) {
    //         orgs.forEach(org => {
    //             if (org === selection) {
    //                 set(org, 'selected', true);
    //             } else {
    //                 set(org, 'selected', false);
    //             }
    //         });
    //         return orgs;
    //     } else {
    //         return null;
    //     }
    // }),

});
