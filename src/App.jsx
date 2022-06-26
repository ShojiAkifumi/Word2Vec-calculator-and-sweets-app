import { useState } from "react";
import TopPage from "./pages/TopPage";
import axios from "axios";
import "./App.css";

function App() {
	const [loading, setLoading] = useState(false);
	const [sentense, setSentense] = useState("");
	const [results, setResults] = useState({});
	const [mode, setMode] = useState("lang");
	const handleSubmit = () => {
		setLoading(true);
		const data = new FormData();
		data.append("sentense", sentense + " =");
		axios
			.post("/data", data)
			.then((response) => {
				setResults(response.data);
				console.log(response);
				setLoading(false);
			})
			.catch((err) => {
				alert(
					"エラーが発生しました。ページをリロードして、もう一度トライしてください。"
				);
				setLoading(false);
			});
	};
	const handleSearch = () => {
		setLoading(true);
		const data = new FormData();
		data.append("sentense", sentense);
		axios
			.post("/sweets", data)
			.then((response) => {
				setResults(response.data);
				console.log(response);
				setLoading(false);
			})
			.catch((err) => {
				alert(
					"エラーが発生しました。ページをリロードして、もう一度トライしてください。"
				);
				setLoading(false);
			});
	};
	return (
		<TopPage
			loading={loading}
			handleSubmit={handleSubmit}
			handleSearch={handleSearch}
			sentense={sentense}
			setSentense={setSentense}
			results={results}
			setResults={setResults}
			mode={mode}
			setMode={setMode}
		/>
	);
}

export default App;
