import * as mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
	_id: String,
    label: String,
    image: String,
    createdOn: {type: Date, default: () => new Date()}
});

module.exports = mongoose.model('Technology', TechnologySchema);
