import { useState } from "react";

function User(props) {
	const [isHover, setIsHover] = useState(false);

	const onClickHandler = () => {
		props.onDeleteUser(props.id);
	};

	const onMouseEnterHanlder = () => {
		setIsHover(true);
	};
	const onMouseLeaveHanlder = () => {
		setIsHover(false);
	};

	return (
		<li
			className="users__item"
			onMouseEnter={onMouseEnterHanlder}
			onMouseLeave={onMouseLeaveHanlder}
		>
			{props.name} ({props.age} years old)
			<div
				className={`users__close-btn ${isHover && "users__close-btn_active"}`}
				onClick={onClickHandler}
			></div>
		</li>
	);
}

export default User;
