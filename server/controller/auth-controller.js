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
        res
        .status(200)
        .json({ status: 'ok', message: req.body });
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
