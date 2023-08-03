const Task = require("../model/task")




exports.createTask = async (req, res) => {


    const task=new Task({
        title:req.body.title,
        desc:req.body.desc,
        status:req.body.status
    })

    await task.save().then(()=>{
        console.log("task created succesfully");
        res.send("Task Added").status(200);
    })
    .catch((err)=>{
        res.send(err).status(500);

    })
  
    
   
  }


  exports.showTask=async (req,res)=>{
    Task.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })


  }

  exports.deleteTask = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).send('Task not found');
      }
  
      res.send('Task deleted successfully');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  
  exports.updateTask = async (req, res) => {
    const id = req.params.id;
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id }, // Properly use the filter with the `_id` field
      req.body,
      { new: true }
    );
  
    try {
      if (!updatedTask) {
        return res.status(404).send('Task not found');
      }
      console.log(updatedTask);
      res.send(updatedTask);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };



  