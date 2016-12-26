import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;

export default Ember.Route.extend({
  actions: {
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      console.warn('removing modal...');
      var name = this.controllerFor('home').get('selection.name');
      console.warn('name', name);
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    deleteOrg: function() {
      console.warn('in application');
      var name = this.controllerFor('home').get('selection.name');
      var toDelete = this.controllerFor('confirmation-modal').get('model');
      var deletedName = get(toDelete, 'name');
      toDelete.destroyRecord().then(function() {
          if (name === deletedName) {
            set(this.controllerFor('home'), 'selection', null);
          }
      }.bind(this));

    }
  }
});
