var Retrospective = require('../models/retrospective')

app.get('/retrospectives', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end()
})
