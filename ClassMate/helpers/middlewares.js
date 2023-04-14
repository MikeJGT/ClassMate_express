const jwt = require('jsonwebtoken');
const { getById } = require('../models/usuario.model');


const checkToken = async (req, res, next) => {

    const token = req.headers['authorization']

    if (!token) {
        return res.json({ fatal: 'Error no tienes la cabecera de autorización' })
    }

    let obj;
    try {
        obj = jwt.verify(token, 'clave fuerte');
    } catch (error) {
        return res.json({ error: 'El token no es correcto' });
    }

    const [user] = await getById(obj.user_id);
    console.log(user);
    req.user = user[0];

    next();

};


module.exports = { checkToken }