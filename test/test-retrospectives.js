var request = require('supertest'),
	config = require('../config')[process.env.NODE_ENV],
	mongoose = require('mongoose'),
	Retrospective = require('../models/retrospective')

describe('Retrospectives', function() {
	describe('Listing retrospectives', function() {
		it('GET /retrospectives should return status code 200', function(done) {
			request(app).get('/retrospectives').expect(200, done)
		})

		it('GET /retrospectives should respond with json', function(done) {
			request(app).get('/retrospectives').expect('Content-Type', /json/, done)
		})
	})
})
