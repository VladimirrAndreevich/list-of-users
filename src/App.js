import React, { useState } from "react";

import "./App.css";
import Users from "./components/Users";
import NewUserForm from "./components/NewUser";

const App = () => {
	const [usersDate, setUsersDate] = useState([
		{ name: "Alex", age: 21, id: 0 },
		{ name: "Max", age: 44, id: 1 },
		{ name: "John", age: 35, id: 2 },
		{ name: "Sarah", age: 29, id: 3 },
	]);

	const addUserHandler = (newUser) => {
		setUsersDate((prevUserDate) => {
			const newUserDate = [...prevUserDate];

			const newId =
				newUserDate.length === 0
					? 0
					: newUserDate[newUserDate.length - 1].id + 1;

			newUserDate.push({ name: newUser.name, age: newUser.age, id: newId });

			return newUserDate;
		});
	};

	const deleteUserHandler = (userId) => {
		setUsersDate((prevUserDate) => {
			const updatedUser = prevUserDate.filter((user) => user.id !== userId);
			return updatedUser;
		});
	};

	return (
		<>
			<section>
				<NewUserForm onSaveUser={addUserHandler} />
			</section>
			<section className="users">
				<Users items={usersDate} onDeleteUser={deleteUserHandler} />
			</section>
		</>
	);
};

export default App;
