const contactController = require('../controllers/contact-controller')
const express = require('express')

const router = express.Router()
router.route('/')
  .get(contactController.list)
  .post(contactController.create)
router.route('/:id')
  .get(contactController.get)
  .put(contactController.update)
  .delete(contactController.remove)

router.param('id', contactController.load)

module.exports = router