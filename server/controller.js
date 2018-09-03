//can wrap the models in a list like this
const {List, Todo} = require('../database/modelsMongo.js');

module.exports = {
  fetch: (req, res) => {
    console.log('In GET...')
    const {listName} = req.query;
    Todo
      .find({listName} = req.query)
      .then(todos => {
        res.status(200).send(todos);
      })
      .catch(err => {
        console.log(err);
      })
  },
  post: (req, res) => {
    console.log('In POST...', req.body)
    const {listName, todo} = req.body;
    new Todo({
      name: todo,
      list_name: listName
    })
    .save()
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      console.log(err);
    })
  },
  delete: (req, res) => {
    console.log('In DELETE...')
    const {todo} = req.query;
    Todo.deleteOne({
      name: todo
    })
    .then(deleted => {
      res.status(202).send(deleted);
    })
    .catch(err => {
      console.log(err);
    });
  }
}