const mongoose = require('mongoose');

const TechnologySchema = mongoose.Schema({
	_id: String,
    label: String,
    image: String,
    createdOn: {type: Date, default: () => new Date()}
});

module.exports = mongoose.model('Technology', TechnologySchema);
