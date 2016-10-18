var mongoose = require('mongoose'),
    Todo = mongoose.model('Companies');

exports.todo = function(req, res, next, id) {
    Todo.findById(id, function(err, todo) {
        if (err) return next(err);
        if (!todo) return next(new Error('Failed to load TODO ' + id));
        req.todo = todo;
        next();
    });
};

exports.show = function(req, res) {
    res.json(req.todo);
};

exports.query = function(req, res) {
    Todo.find().exec(function (err, todo) {
        if (err) return res.json(500, err);
        res.json(todo);
    });
};

exports.create = function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function (err) {
        if (err) return res.json(500, err);
        res.json(todo);
    });
};

exports.update = function(req, res) {
    Todo.update({_id: req.todo._id}, req.body, { }, function (err, newTodo) {
        if (err) return res.json(500, err);
        res.json(newTodo);
    });
};

exports.remove = function(req, res) {
    var todo = req.todo;

    todo.remove(function (err) {
        if (err) return res.json(500, err);
        res.json(todo);
    });
};