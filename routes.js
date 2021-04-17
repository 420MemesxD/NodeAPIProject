module.exports = router => {
  require('./routes/people')(router);
  require('./routes/Traits')(router);
  return router;
};
