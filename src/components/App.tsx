export const App = () => {
	const a = 3;

	return (
		<div className="app">
			<header className="app-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload. {a}
				</p>
				<a
					className="app-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
