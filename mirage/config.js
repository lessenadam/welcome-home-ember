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
  this.get('/orgs', function() {
    return orgs;
  });

  this.post('/orgs', function(data) {
    console.warn('data', data);
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

let orgs = {data: [{
        type: 'orgs',
        id: 'home',
        attributes: {  
          name: 'Home',
          message: 'Welcome home, Adam!'
        }
    }, {
        type: 'orgs',
        id: 'dungeon',
        attributes: {
          name: 'Dungeon',
          message: 'Watch out for the Demogorgon, you are in the dungeon, Adam!' 
        }
    },
]};
