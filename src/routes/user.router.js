const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
        .post(create)

usersRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update)
module.exports = usersRouter;