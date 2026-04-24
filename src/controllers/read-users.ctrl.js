const ReadUserController = (req, res, next) => {
    const readUsersInteractor = req.container.resolve('ReadUsersInteractor');

    const response = readUsersInteractor.execute();

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ message: 'Error reading users' });
    }
}

module.exports = ReadUserController;