const router = require("express").Router()
const controller=require("../controller/controller")


router
  .post('/addTask',controller.createTask)
  .get("/showTask",controller.showTask)
  .delete("/deleteTask/:id",controller.deleteTask)
  .patch("/updateTask/:id",controller.updateTask)

module.exports = router