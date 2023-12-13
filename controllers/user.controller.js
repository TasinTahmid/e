const User = require("../models/user.model");

module.exports.createUser = async (req, res) => {
    console.log("happyt that its wprlkomg..");
    const user = req.body;
    const newUser = await User.create(user);
    res.status(201).send(newUser);
};

module.exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

module.exports.getUser = async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ where: { id } });
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.send(user);
};

module.exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { newPassword } = req.body;

    const user = await User.findOne({ where: { id } });
    if (!user) {
        return res.status(404).send("User not found");
    }
    const updatedUser = await user.update({ password: newPassword });
    res.send(updatedUser);
};
