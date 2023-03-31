const express = require('express');
const contactController = require('../../controllers/API/contact.controller');
const checkAuthMiddleware = require('../../middleware/check-auth');

const router = express.Router();

router.post("/contact", checkAuthMiddleware.checkAuth,  contactController.save);
router.get("/contact", checkAuthMiddleware.checkAuth, contactController.index);
router.get("/contact/:id", checkAuthMiddleware.checkAuth, contactController.show);
router.patch("/contact/:id", checkAuthMiddleware.checkAuth, contactController.update);
router.delete("/contact/:id", checkAuthMiddleware.checkAuth, contactController.destroy);

module.exports = router;