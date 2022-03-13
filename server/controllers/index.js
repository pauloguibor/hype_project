const urlController = require('./url.controllers.js');
const userController = require('./user.controllers.js')
const login = require('./auth.controllers.js')
const userRamdomUrl = require('./url_ramdom.controllers')
const nomes = require('./nomes.controllers.js')


module.exports = {
    url:urlController,
    user:userController,
    login:login,
    nomes:nomes
}