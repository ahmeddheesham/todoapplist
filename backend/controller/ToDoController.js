const ToDoModel = require('../models/ToDoModel')




// Show Data
module.exports.getToDos = async (req,res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
};



// Creat Data
module.exports.saveToDos =  (req,res) => {
    const {toDo} = req.body;

    ToDoModel.create({ toDo })
    .then((data) => {
        console.log("Saved Successfully...")
        res.status(200).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
    };






// Update Data
module.exports.updateToDos =  (req,res) => {
    const {id} = req.params;
    const {toDo} = req.body;

    ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
        res.send("Updated Successfully...");
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
};








// Delete Data
module.exports.deleteToDos =  (req,res) => {
    const {id} = req.params;

    ToDoModel.findByIdAndDelete(id)
    .then(() => {
        res.send("Deleted Successfully...");
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
        
    }