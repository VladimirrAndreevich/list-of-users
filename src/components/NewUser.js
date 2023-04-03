import React, { useState } from "react";
import Warning from "./Warning";

function NewUserForm(props) {
	function hasNumbers(str) {
		const regex = /\d/;
		return regex.test(str);
	}

	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const [isShowWarning, setIsShowWarning] = useState(false);

	const [warning, setWarning] = useState({
		title: "",
		description: "",
	});

	const submitHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim().length === 0) {
			setWarning({
				title: "Invalid input",
				description: "Username must be filled!",
			});
			setIsShowWarning(true);
		} else if (hasNumbers(enteredName.trim())) {
			setWarning({
				title: "Invalid input",
				description: "Username must not contain numbers!",
			});
			setIsShowWarning(true);
		} else if (enteredAge.trim().length === 0) {
			setWarning({
				title: "Invalid input",
				description: "Age must be filled!",
			});
			setIsShowWarning(true);
		} else if (Number(enteredAge) < 0) {
			setWarning({
				title: "Invalid input",
				description: "Please enter a valid age. The age cannot be less 0!",
			});
			setIsShowWarning(true);
		} else if (Number(enteredAge) > 150) {
			setWarning({
				title: "Invalid input",
				description: "Please enter a valid age. The age cannot be bigger 150!",
			});
			setIsShowWarning(true);
		} else {
			const newUser = {
				name: enteredName,
				age: enteredAge,
			};
			props.onSaveUser(newUser);
			setEnteredName("");
			setEnteredAge("");
		}
	};

	const onCloseWarningHandler = () => {
		setIsShowWarning(false);
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<>
			{isShowWarning && (
				<Warning
					title={warning.title}
					description={warning.description}
					onClose={onCloseWarningHandler}
				/>
			)}

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
					// min="0"
					// max="150"
					className="new-user-form__input"
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
				<button type="submit">Add User</button>
			</form>
		</>
	);
}

export default NewUserForm;
