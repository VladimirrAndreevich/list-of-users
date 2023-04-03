function Warning(props) {
	const onClickHandler = (event) => {
		if (
			event.target.classList.contains("warning__outer") ||
			event.target.classList.contains("warning__btn")
		) {
			props.onClose();
		}
	};

	return (
		<div className="warning__outer" onClick={onClickHandler}>
			<div className="warning">
				<h2 className="warning__title">{props.title}</h2>
				<div className="warning__description">{props.description}</div>
				<button className="warning__btn">Okay</button>
			</div>
		</div>
	);
}

export default Warning;
