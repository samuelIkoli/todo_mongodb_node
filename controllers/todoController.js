const Todo = require('../models/todo')

exports.showtodo = (req, res) => {
    try{
        const all = await Todo.find({});
        console.log('show')
        res.status(200).json(all)
    }
    catch(e){
        console.log('error')
        res.status(200).json(e)
    }
}

exports.addtodo = async(req, res) => {
    try{
        const todo = await new Todo(req.body.todo)
        await todo.save()
        const all = await Todo.find({});
        res.status(200).json(all)
    }
    catch(e){
        res.status(200).json(e)
    }
}

exports.updatetodo = async(req, res) => {
    try{
        let id = req.params.id
        const todo = await Todo.findByIdAndUpdate(id, { ...req.body.todo})
        await todo.save()
        res.status(200).json(todo)
   }
   catch(e){
       res.status(200).json(e)
   }
}

exports.deletetodo = async(req, res) => {
    try{
        let id = req.params.id
        await Campground.findByIdAndDelete(id);
        console.log('deleted')
        const todo = await Todo.find({});
        res.status(200).json(todo)
    }
    catch(e){
        res.status(200).json(e)
    }
}

