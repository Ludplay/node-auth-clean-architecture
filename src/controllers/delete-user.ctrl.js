const DeleteUserController = async (req, res) => {
    const userInteractor = req.container.resolve('deleteUserInteractor');
    const result = await userInteractor.execute(req.params.userId);

    res.status(200).json(result);
};

module.exports = DeleteUserController;