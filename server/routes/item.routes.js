const router = require('express').Router();
const projectController = require("../controllers/Project.controller");

router.get("/", projectController.selectAll);
router.post("/postProject",projectController.addProject)
router.delete("/deleteProject/:id",projectController.deleteProject)
 router.post("/updateProject/:id",projectController.updateProject)

module.exports = router;
 