export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  this.namespace = '/api';
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.get('/orgs', ({ orgs }, request) => {
    // return orgs;
    return orgs.all();

  });

  this.post('/orgs', function(schema, request) {
    console.warn('data', request.requestBody);
    const attrs = JSON.parse(request.requestBody).data.attributes;
    // const attrs = JSON.parse(request.requestBody).org;

    /* want to call .org, so need "org": {
      name: name,
      body: body
    }
      
    */
    return schema.orgs.create(attrs);
  });

  this.del('/orgs/:id', function(schema, request) {
    schema.orgs.find(request.params.id).destroy();
  });

  this.patch('/orgs/:id', function(schema, request) {
    const org = schema.orgs.find(request.params.id);
    // except with .update(key, val)
    const attrs = JSON.parse(request.requestBody).data.attributes;
    return org.update(attrs);
    // org.update({
    //   message: ,
    //   name:
    // })
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}

// let orgs = {data: [{
//         type: 'orgs',
//         id: 'home',
//         attributes: {  
//           name: 'Home',
//           message: 'Welcome home, Adam!'
//         }
//     }, {
//         type: 'orgs',
//         id: 'dungeon',
//         attributes: {
//           name: 'Dungeon',
//           message: 'Watch out for the Demogorgon, you are in the dungeon, Adam!' 
//         }
//     },
// ]};
