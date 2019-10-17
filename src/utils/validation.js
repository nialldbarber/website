export const validateRegisterInput = (email) => {
	let error
	if (email.trim() === '') {
		error = true
	} else {
		const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
		if (!email.match(regEx)) {
			error = true
		}
	}
	return error
}
