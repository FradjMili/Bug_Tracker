// DELETE THIS LINE
var selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
 var Project = require('../database-mongo/Project.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };


var addProject = function(req,res) {
let {name,description}=req.body 
    Project.insertMany({name, description})
    .then((Project) => {
        res.status(200).send(Project);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
        
    };

var selectAll = function (req, res) {
    Project.find({})
        .then((Project) => {
           res.status(200).send(Project);
          })
        .catch((error) => {
          res.status(500).send(error);
          });
  };

var deleteProject = function (req,res){
    let {id} = req.params;
    Project.deleteOne({ _id: id })
      .then((Project) => {
         res.status(200).send(Project);
         })
      .catch((error) => {
    res.status(500).send(error);
     });

   }   

var updateProject =function(req,res){
  let {id}=req.params;
  let { name, description } = req.body;

  Project.updateOne({ _id: id }, {
    name: name,
   description: description
 })
 .then((Project) => {
    res.status(200).send(Project);
    })
 .catch((error) => {
res.status(500).send(error);
});
   
}     

module.exports = { selectAll ,addProject,deleteProject,updateProject};
