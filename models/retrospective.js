var mongoose = require('mongoose'),
    Schema = mongoose.Schema

RetrospectiveSchema = new Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true }
})

module.exports = mongoose.model('Retrospective', RetrospectiveSchema)
