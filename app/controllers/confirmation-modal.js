import Ember from 'ember';

var set = Ember.set;
var get = Ember.get;

export default Ember.Controller.extend({
    needs: ['home'],
    home: Ember.computed.alias('controllers.home'),
    actions: {
        deleteOrg: function() {
            console.warn('home', get(this, 'home'));
        //     this.get('model').destroyRecord().then(function(){
        //         // return true;
        //     }.bind(this));
            return true;
        }
    }
});

// have a controller... want to access controllers in generall 
// record gets deleted in the store....
// the controller for home has a prop called selection
// it gets updated when a record is clicked inside of the home route?
