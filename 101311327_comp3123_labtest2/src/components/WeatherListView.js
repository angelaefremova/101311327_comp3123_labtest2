import React from "react";
import WeatherListItem from "./WeatherListItem";

class WeatherListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: this.dateDiv(this.props.forecast) };
	}
	componentDidMount = () => {
		// console.log(this.state.data);
	};
	dateDiv = (input) => {
		let curr_day = -1;
		let new_days = [];
		input.list.forEach((day) => {
			let parseDate = new Date(parseInt(day.dt) * 1000).getDay();
			if (parseDate !== curr_day) {
				curr_day = parseDate;
				new_days.push(day);
				new_days[new_days.length - 1].hours = [];
				new_days[new_days.length - 1].hours.push(day);
			} else {
				new_days[new_days.length - 1].hours.push(day);
			}
		});
		input.list = new_days;

		let output = input;
		return output;
	};
	render() {
		return (
			<div>
				<div>
					{this.state.data.list.map((day, index) => (
						<WeatherListItem key={index} data={day} />
					))}
				</div>
			</div>
		);
	}
}

export default WeatherListView;
