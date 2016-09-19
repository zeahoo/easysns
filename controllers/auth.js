const send = require('../utils/send')
const qs = require('querystring')
const parseBody = require('../utils/parseBody')
exports.login = function(req, res){
  parseBody(req, function(err, body){
    if(err){
      send.sendError(err, res)
    }
    // login(body.email, body.password)
    send.redirect('/', res)
  })
}
exports.register = function(req, res) {
  parseBody(req, function(err, body){
    if(err){
      send.sendError(err, res)
    }
    var user = {
      email: body.email,
      password: body.password,
      nickname: body.nickname
    }
    // save(user)
    console.log('send redirect')
    send.redirect('/', res)
  })
}
