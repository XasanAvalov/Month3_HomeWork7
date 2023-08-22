const jwt = require("../utils/jwt");
const userQuery = require("../querys/user.query");

const get_one = async(req, res) => {
    const {id} = req.params;

    const user = await userQuery.find_one(id);
    
    const token = jwt.sign({id: user.id});

    res.status(201).json({message: 'Success', token});
}

module.exports = { get_one };