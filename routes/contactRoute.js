const express = require('express');
const contactController = require('../controllers/contact.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/contacts/contact", checkAuthMiddleware.checkAuth,  contactController.save);
router.get("/contacts/contact", checkAuthMiddleware.checkAuth, contactController.index);
router.get("/contacts/contact/:id", checkAuthMiddleware.checkAuth, contactController.show);
router.patch("/contacts/contact/:id", checkAuthMiddleware.checkAuth, contactController.update);
router.delete("/contacts/contact/:id", checkAuthMiddleware.checkAuth, contactController.destroy);

module.exports = router;