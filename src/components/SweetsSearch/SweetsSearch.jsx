import React from "react";

import { useRef } from "react";
import EqualButton from "../Form/EqualButton";
import TextField from "../Form/TextField";

const SweetsSearch = ({ sentense, setSentense, handleSearch }) => {
	const AcButton = () => {
		setSentense("");
	};
	const inputEl = useRef(null);
	return (
		<div className="form-container">
			<div className="input-form">
				<TextField
					sentense={sentense}
					setSentense={setSentense}
					inputEl={inputEl}
					placeholder={"お菓子のキーワードを入力"}
				/>
				<EqualButton handleFunc={handleSearch}>検索</EqualButton>
			</div>
			<div className="ope-btns">
				<button onClick={AcButton}>AC</button>
			</div>
		</div>
	);
};

export default SweetsSearch;
