import React from "react";

const TextField = ({
	sentense,
	setSentense,
	setNextIsText,
	inputEl,
	placeholder,
}) => {
	const handleChange = (e) => {
		setSentense(e.target.value);
		if (setNextIsText) {
			setNextIsText(false);
		}
	};
	return (
		<div className="text-field">
			<input
				type="text"
				value={sentense}
				onChange={handleChange}
				ref={inputEl}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextField;
