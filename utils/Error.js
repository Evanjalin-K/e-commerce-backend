const unknownEndpoint = (req, res)=> {
    res.status(404).send({error: 'unknown endpoint'}) //unknown endpoint
}
module.exports = unknownEndpoint;