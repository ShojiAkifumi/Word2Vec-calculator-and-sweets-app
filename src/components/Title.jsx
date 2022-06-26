const Title = ({ mode }) => {
	return (
		<div>
			<h1>{mode === "lang" ? "Language Calculator" : "Sweets Search"}</h1>
		</div>
	);
};

export default Title;
