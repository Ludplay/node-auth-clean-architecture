const GetUserController = async (req, res) => {
    const userInteractor = req.container.resolve('getUserInteractor');
    const result = await userInteractor.execute(req.params.userId);

    if(result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = GetUserController;