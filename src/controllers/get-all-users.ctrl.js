const GetAllUsersController = async (req, res) => {
    const userInteractor = req.container.resolve('getAllUsersInteractor');
    const result = await userInteractor.execute();

    res.status(200).json(result);
};

module.exports = GetAllUsersController;