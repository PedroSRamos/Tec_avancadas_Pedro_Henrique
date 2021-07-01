const express = require('express');
const router = express.Router();
const { 
  getController,
  createcontroller,
  deleteController,
  base,
} = require('./controller')

router.get("/test", base);

router.get("/api/v1/bills", getController);
router.delete("/api/v1/bills/:id", deleteController);
router.post("/api/v1/bills", createcontroller);

module.exports = router;