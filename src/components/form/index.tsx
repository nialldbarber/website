import React, { FC, useState } from 'react'

const Form: FC = () => {
	const [input, setInput] = useState()

	return (
		<form>
			<h1>Form</h1>
			<input type="text" />
			<button>Submit</button>
		</form>
	)
}

export default Form
