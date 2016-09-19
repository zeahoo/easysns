module.exports = function(stream, callback) {
  var buffers = []
  stream.on('data', function(data) {
    buffers.push(data)
  })
  stream.on('end', function(data) {
    callback(null, Buffer.concat(buffers).toString('utf8'))
  })
  stream.on('error', function(err) {
    callback(err)
  })
}
