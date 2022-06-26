import { Loading } from "./index";

const Results = ({ loading, results, mode }) => {
	let result_list = [];
	for (let i in results) {
		result_list = [...result_list, results[i]];
	}
	return (
		<div className="results-container">
			{mode === "lang" ? (
				<p className="description">
					意味合いが似ている単語を表示します。
					<br />
					スコア（類似度）が1.0に近い単語ほど、
					<br />
					ほぼ同じ意味合いで使われることが多い単語であることが分かります。
					<br />
					単語を組み合わせて計算させることもできます。
				</p>
			) : (
				<p className="description">
					全国のコンビニお菓子をキーワード検索できます。
					<br />
					<del>
						お題がお菓子だったことを思い出して
						<br />
						やっつけで作りました。
					</del>
				</p>
			)}
			{loading ? (
				<Loading />
			) : (
				<table>
					{result_list.map((result, index) => (
						<tr key={index}>
							<th>{result.main}</th>
							<td>
								{mode === "lang" ? (
									<small>スコア: </small>
								) : (
									<small>メーカー: </small>
								)}
								<span>{result.sub}</span>
							</td>
						</tr>
					))}
				</table>
			)}
		</div>
	);
};

export default Results;
