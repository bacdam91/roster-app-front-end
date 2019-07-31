import React, { Component } from "react";
import "./App.css";
import DateBlock from "./components/dateBlock";

class App extends Component {
	state = {
		dateBlocks: [
			{
				id: 1,
				date: 1
			},
			{
				id: 2,
				date: 2
			}
		]
	};

	render() {
		return (
			<div className="App container">
				{this.state.dateBlocks.map(db => {
					return <DateBlock key={db.id} dateBlock={db} />;
				})}
			</div>
		);
	}
}

export default App;
