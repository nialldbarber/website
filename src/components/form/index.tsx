import React, { FC, useState } from 'react'
import { validateRegisterInput } from '~@utils/validation'

const Form: FC = () => {
	const [input, setInput] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleBlur = (e) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			// validateRegisterInput()
			const { value } = e.target
			if (validateRegisterInput(value)) {
				console.log('true')
			} else {
				console.log('false')
			}
		}
	}

	return (
		<form name="contact" method="post" onSubmit={handleSubmit}>
			<input type="hidden" name="form-name" value="contact" />
			<div>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</div>
			<div>
				<span>{'error!'}</span>
				<label>
					Your Email: <input type="email" name="email" onBlur={handleBlur} />
				</label>
			</div>
			<div>
				<label>
					Message: <textarea name="message" />
				</label>
			</div>
			<div>
				<button type="submit">Send</button>
			</div>
		</form>
	)
}

export default Form
