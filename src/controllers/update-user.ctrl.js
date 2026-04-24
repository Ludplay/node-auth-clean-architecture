const UpdateUserController = async (req, res) => {
    const userInteractor = req.container.resolve('updateUserInteractor');
    const result = await userInteractor.execute(req.params.userId, req.body);

    res.status(200).json(result);
};

module.exports = UpdateUserController;