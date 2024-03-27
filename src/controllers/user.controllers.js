const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const result = await User.findAll();
    return res.json(result);
});

const create = catchError(async (req, res) =>{
    const result = await User.create(req.body)
    res.status(201).json(result)
})

const getOne = catchError(async (req, res) =>{
    const {id} = req.params;
    const result = await User.findByPk(id)
    if(!result) return res.sendStatus(404)
    return res.json(result)
});

const destroy = catchError(async (req, res) =>{
    const {id} = req.params;
    const user = await User.findByPk(id)
    if(!user) res.sendStatus(404);
    const result = await user.destroy()
    return res.send(204).json(result)
}) 

const update = catchError(async (req, res) =>{
    const {id} = req.params
    const result = await User.update(req.body, {where: {id}, returning: true})

    if(result[0] === 0) return res.sendStatus(404);

    return res.json(result[1][0])
})



module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}