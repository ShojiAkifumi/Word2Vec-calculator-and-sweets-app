import React from "react";

const EqualButton = ({ handleFunc, children }) => {
	return (
		<button className="equal-btn" value="=" name="=" onClick={handleFunc}>
			{children}
		</button>
	);
};

export default EqualButton;
