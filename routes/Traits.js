const { index, show, create, update, destroy } = require('../controllers/Traits');

module.exports = router => {
  router.get("/Traits", index);
  router.get("/Traits/:id", show);
  router.post("/Traits", create);
  router.put("/Traits", update);
  router.delete("/Traits", destroy);

  return router;
};
