const OpeButton = ({
	children,
	setSentense,
	nextIsText,
	setNextIsText,
	inputEl,
}) => {
	const setOperator = () => {
		if (nextIsText) return;
		setSentense((prev) => `${prev} ${children} `);
		setNextIsText(true);
		inputEl.current.focus();
	};
	return <button onClick={setOperator}>{children}</button>;
};

export default OpeButton;
