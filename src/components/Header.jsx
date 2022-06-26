const Header = ({ setMode, setSentense }) => {
	const handleChangeLang = () => {
		setSentense("");
		setMode("lang");
	};
	const handleChangeSweets = () => {
		setSentense("");
		setMode("sweets");
	};
	return (
		<div className="header">
			<div onClick={handleChangeLang}>自然言語計算</div>
			<div onClick={handleChangeSweets}>お菓子検索</div>
		</div>
	);
};

export default Header;
