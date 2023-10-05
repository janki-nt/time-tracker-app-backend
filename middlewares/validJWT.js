const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const validJWT = async (req, res, next) => {
    const authHeader = req.headers['cookie'];
    const token = authHeader && authHeader.split('=')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            req.user = decoded.user;
            next();
        }
    });
}

function generateAccessToken(user) {
    return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = {
    validJWT,
    generateAccessToken
}
