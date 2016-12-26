import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // serialize(snapshot, options) {
  //   var json = this._super(...arguments);
  //   json.org = {
  //     name: json.data.attributes.name,
  //     message: json.data.attributes.message
  //   };

  //   return json;
  // },
});
