import { useState } from "react";

function User(props) {
	const [isHover, setIsHover] = useState(false);

	const [isDisappearing, setIsDisappearing] = useState(false);

	const onClickHandler = () => {
		setIsDisappearing(true);
		// props.onDeleteUser(props.id);
		setTimeout(() => {
			props.onDeleteUser(props.id);
		}, 600);
	};

	const onMouseEnterHanlder = () => {
		setIsHover(true);
	};
	const onMouseLeaveHanlder = () => {
		setIsHover(false);
	};

	return (
		<li
			className={`users__item ${isDisappearing ? "users__item_dying" : ""}`}
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
