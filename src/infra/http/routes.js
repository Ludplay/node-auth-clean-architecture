const express = require('express');
const router = express.Router();

const validateMiddleware = require('./middlewares/validate');
const authenticateMiddleware = require('./middlewares/authenticate');

const UserController = require("../../controllers/user.ctrl");
const DeleteUserController = require('../../controllers/delete-user.ctrl');
const UpdateUserController = require('../../controllers/update-user.ctrl');
const GetUserController = require('../../controllers/get-user.ctrl');
const GetAllUsersController = require('../../controllers/get-all-users.ctrl');
const LoginUserController = require('../../controllers/login-user.ctrl');

const userSchema = require('../../validators/users/user.schema');

router.get('/', (req, res) => {
  res.send('Hello World! Yeah');
});

router.post('/login', LoginUserController);

router.post(
    '/create-user', 
    authenticateMiddleware,
    validateMiddleware(userSchema),
    UserController
);

router.get('/get-user/:userId', authenticateMiddleware, GetUserController);
router.put('/update-user/:userId', authenticateMiddleware, UpdateUserController);
router.delete('/delete-user/:userId', authenticateMiddleware, DeleteUserController);
router.get('/get-users', authenticateMiddleware, GetAllUsersController);

module.exports = router;