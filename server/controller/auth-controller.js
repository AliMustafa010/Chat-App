const User = require('../model/user-model');

const Home = async (req, res) => {
    try {
        res
        .status(200)
        .json({ status: 'ok', message: 'Express server running' });
    } catch (error) {
        res
        .status(500)
        .json({ status: 'error', message: 'Home Server Error' });
    }
}

const Register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, age, phone } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res
            .status(400)
            .json({ status: 'error', message: 'User already exists' });
        }

        const userCreated = await User.create({username, email, password, age, phone});

        res
        .status(200)
        .json({ status: 'ok', message: userCreated });
    } catch (error) {
        res
        .status(500)
        .json({ status: 'error', message: 'Register Server Error' });
    }
}

const Login = async (req, res) => {
    try {
        res
        .status(200)
        .json({ status: 'ok', message: 'Login route' });
    } catch (error) {
        res
        .status(500)
        .json({ status: 'error', message: 'Login Server Error' });
    }
}

module.exports = {
    Home,
    Register,
    Login
}
