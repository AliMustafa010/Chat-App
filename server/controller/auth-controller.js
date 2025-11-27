const User = require('../model/user-model');
const bcrypt = require('bcryptjs');

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
        const { username, email, password, age, phone } = req.body;

        const userExist = await User.findOne({ email : email });
        if (userExist) {
            return res
            .status(400)
            .json({ status: 'error', message: 'User already exists' });
        }

        const userCreated = await User.create({
            username, 
            email, 
            password,
            age, 
            phone
        });

        res
        .status(200)
        .json({ 
            status: 'ok', 
            message: userCreated, 
            userToken: await userCreated.generateToken(),
            userId: userCreated.id > toString()
        });
    } catch (error) {
        res
        .status(500)
        .json({ status: 'error', message: 'Register Server Error' });
    }
}

const Login = async (req, res) => {
    
    try {
        const { email, password } = req.body;

        const userExisted = await User.findOne({ email : email });
        if (!userExisted) {
            return res
            .status(400)
            .json({ status: 'error', message: 'User does not exist' });
        }

        const isPasswordMatch = await bcrypt.compare(password, userExisted.password);
        if (!isPasswordMatch) {
            return res
            .status(400)
            .json({ status: 'error', message: 'Invalid credentials'});
        }

        res
        .status(200)
        .json({ 
            status: 'ok', 
            message: 'Login Succesfull',
            userToken: await userExisted.generateToken(),
            userId: userExisted.id.toString()
        });
    } catch (error) {
        res
        .status(500)
        .json({ status: 'error', message: 'Login Server Error' , error: error.message });
    }
}

module.exports = {
    Home,
    Register,
    Login
}
