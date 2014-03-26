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

	describe('Creating a retrospective', function() {
		it('POST /retrospectives should return status code 200', function(done) {
			request(app).post('/retrospectives').expect(200, done)
		})

		describe('Database', function() {
			var data;
			before(function(done) {
		        if (mongoose.connection.db) {
		            return done();
		        }
		        mongoose.connect(config.db, done)
		    });

		    after(function(done) {
		        mongoose.connection.db.dropDatabase(function(){
		            mongoose.connection.close(done)
		        })
		    })

		    beforeEach(function(done) {
		    	data = {title: 'title', date: Date.now}
		    	done()
		    })

			it('should have a title', function(done) {
				data.title = null
				var retrospective = new Retrospective(data)
				retrospective.save(function (err, retrospective) {
	                err.should.not.be.null
	                done()
	            })
			})

			it('should have a date', function(done) {
				data.date = null
				var retrospective = new Retrospective(data)
				retrospective.save(function (err, retrospective) {
	                err.should.not.be.null
	                done()
	            })
			})
		})	
	})
})
