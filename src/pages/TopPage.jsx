import {
	Header,
	Title,
	Form,
	Results,
	SweetsSearch,
} from "../components/index";
const TopPage = ({
	loading,
	handleSubmit,
	handleSearch,
	sentense,
	setSentense,
	results,
	mode,
	setMode,
}) => {
	return (
		<div className="top-page-container">
			<div>
				<Header setMode={setMode} setSentense={setSentense} />
				<Title mode={mode} />
				{mode === "lang" ? (
					<Form
						sentense={sentense}
						setSentense={setSentense}
						handleSubmit={handleSubmit}
					/>
				) : (
					<SweetsSearch
						sentense={sentense}
						setSentense={setSentense}
						handleSearch={handleSearch}
					/>
				)}

				<Results loading={loading} results={results} mode={mode} />
			</div>
		</div>
	);
};

export default TopPage;
