const {
  index, create, show, update, destroy
} = require('../controllers/people');

 module.exports = router => {
   router.post('/people', create);
   router.get('/people', index);
   router.get('/people/:id', show);
   router.put('/people', update);
   router.delete('/people', destroy);
 };
