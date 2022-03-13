const express = require('express');
const personController = require('../controllers/person.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/people/person", checkAuthMiddleware.checkAuth,  personController.save);
router.get("/people/person", checkAuthMiddleware.checkAuth, personController.index);
router.get("/people/person/:id", checkAuthMiddleware.checkAuth, personController.show);
router.patch("/people/person/:id", checkAuthMiddleware.checkAuth, personController.update);
router.delete("/people/person/:id", checkAuthMiddleware.checkAuth, personController.destroy);

module.exports = router;