import React, { useState } from "react";

function NewUserForm(props) {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		const newUser = {
			name: enteredName,
			age: enteredAge,
		};
		props.onSaveUser(newUser);
		setEnteredName("");
		setEnteredAge("");
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<form onSubmit={submitHandler} className="new-user-form">
			<label className="new-user-form__label">Username</label>
			<input
				type="text"
				name="name"
				className="new-user-form__input"
				value={enteredName}
				onChange={nameChangeHandler}
			/>
			<label className="new-user-form__label">Age (Years)</label>
			<input
				type="number"
				name="age"
				min="0"
				max="150"
				className="new-user-form__input"
				value={enteredAge}
				onChange={ageChangeHandler}
			/>
			<button type="submit">Add User</button>
		</form>
	);
}

export default NewUserForm;
