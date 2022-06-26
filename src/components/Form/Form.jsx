import { useState, useRef } from "react";
import EqualButton from "./EqualButton";
import TextField from "./TextField";
import OpeButton from "./OpeButton";

const Form = ({ sentense, setSentense, handleSubmit }) => {
	const [nextIsText, setNextIsText] = useState(true);
	const AcButton = () => {
		setSentense("");
		setNextIsText(true);
	};
	const inputEl = useRef(null);
	return (
		<div className="form-container">
			<div className="input-form">
				<TextField
					sentense={sentense}
					setSentense={setSentense}
					setNextIsText={setNextIsText}
					inputEl={inputEl}
					placeholder={"例) イチロー - 野球 + サッカー"}
				/>
				<EqualButton handleFunc={handleSubmit}>計算</EqualButton>
			</div>
			<div className="ope-btns">
				<button onClick={AcButton}>AC</button>
				<OpeButton
					nextIsText={nextIsText}
					setNextIsText={setNextIsText}
					setSentense={setSentense}
					inputEl={inputEl}
				>
					+
				</OpeButton>
				<OpeButton
					nextIsText={nextIsText}
					setNextIsText={setNextIsText}
					setSentense={setSentense}
					inputEl={inputEl}
				>
					-
				</OpeButton>
			</div>
		</div>
	);
};

export default Form;
