const LoginUserController = async (req, res) => {
    const loginUserInteractor = req.container.resolve('loginUserInteractor');

    const email = req.body.email;
    const password = req.body.password;

    const result = await loginUserInteractor.execute(email, password);

    if(typeof result === 'object' && result !== null) {
        res.status(201).json(result);
    } else {
        res.status(400).json({ message: 'Login failed', error: result });
    }
};

module.exports = LoginUserController;