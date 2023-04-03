import User from "./User";

function Users(props) {
	if (props.items.length === 0) {
		return <h2>Found no users.</h2>;
	}
	return (
		<ul className="users__list">
			{props.items.map((item) => {
				return (
					<User
						name={item.name}
						age={item.age}
						key={item.id}
						id={item.id}
						onDeleteUser={props.onDeleteUser}
					/>
				);
			})}
		</ul>
	);
}

export default Users;
