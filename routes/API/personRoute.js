const express = require('express');
const personController = require('../../controllers/API/person.controller');
const checkAuthMiddleware = require('../../middleware/check-auth');

const router = express.Router();

router.post("/person", checkAuthMiddleware.checkAuth,  personController.save);
router.get("/person", checkAuthMiddleware.checkAuth, personController.index);
router.get("/person/:id", checkAuthMiddleware.checkAuth, personController.show);
router.patch("/person/:id", checkAuthMiddleware.checkAuth, personController.update);
router.delete("/person/:id", checkAuthMiddleware.checkAuth, personController.destroy);

module.exports = router;