const router = require('express').Router();
const controller = require('./controller.js')

router
  .route('/todoList')
  .post(controller.post)
  .get(controller.fetch)
  .delete(controller.delete);

module.exports = router;