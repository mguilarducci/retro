var should = require('should'),
    config = require('../config.js')

describe('config', function() {
    it('should exist', function (done) {
        should.exist(config)
        done()
    })

    it('should have "production", "test" and "development" envs', function(done) {
        config.should.have.properties('production', 'development', 'test')
        done()
    })

    describe('test env', function() {
        it('should have "db" property', function(done) {
            config.test.db.should.not.be.empty
            done()
        })
    })

    describe('development env', function() {
        it('should have "db" property', function(done) {
            config.development.db.should.not.be.empty
            done()
        })
    })
})
