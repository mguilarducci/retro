app.get('/retrospectives', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end()
})

app.post('/retrospectives', function(req, res) {
    res.writeHead(200)
    res.end()
})
