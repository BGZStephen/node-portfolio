function buildUpdateObject(body, updatableFields) {
	const updateKeys = updatableFields.split(' ');
	let updateParams = {};
	for (const key in updateKeys) {
		if(body[key]) {
			updateParams[key] = body[key];
		}
	}
	return updateParams;
}

module.exports = {
  buildUpdateObject
};
