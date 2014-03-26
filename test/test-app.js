var should = require('should'),
    request = require('supertest')

var app = require('../app.js')

describe('app', function() {
    it('should exist', function(done) {
        should.exist(app)
        done()
    })

    describe('routes', function() {
        it('GET / should return status code 200', function(done) {
            request(app)
                .get('/')
                .expect(200, done)
        })
    })
})
