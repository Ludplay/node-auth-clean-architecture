const UserController = async (req, res) => {
    const userInteractor = req.container.resolve('userInteractor');
    const result = await userInteractor.execute(req.body);

    if(typeof result === 'object' && result !== null) {
        res.status(201).json(result);
    } else {
        res.status(400).json({ message: 'User was not created', error: result });
    }
};

module.exports = UserController;