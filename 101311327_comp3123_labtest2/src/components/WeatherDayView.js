import React from "react";
import morning_icon from "./../assets/weather_icons/morning-icon.svg";
import night_icon from "./../assets/weather_icons/sunrise-icon.svg";

class WeatherDayView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dat: this.props.day };
	}
	componentDidMount = () => {};

	render() {
		return (
			<div className="m-3">
				<div className="d-flex flex-column justify-content-center border rounded p-5">
					<div className="d-flex justify-content-center">
						<div className="col-auto me-4">
							<img
								style={{ height: "3rem", width: "3rem" }}
								src={morning_icon}
								alt=""
							/>
							<span>
								{new Date(
									parseInt(this.state.dat.sys.sunrise) * 1000
								).getHours() +
									":" +
									new Date(
										parseInt(this.state.dat.sys.sunrise) * 1000
									).getMinutes()}
							</span>
						</div>
						<div className="col-auto">
							<img
								style={{ height: "3rem", width: "3rem" }}
								src={night_icon}
								alt=""
							/>
							<span>
								{(new Date(
									parseInt(this.state.dat.sys.sunset) * 1000
								).getHours() > 12
									? new Date(
											parseInt(this.state.dat.sys.sunset) * 1000
									  ).getHours() - 12
									: new Date(
											parseInt(this.state.dat.sys.sunset) * 1000
									  ).getHours()) +
									":" +
									new Date(
										parseInt(this.state.dat.sys.sunset) * 1000
									).getMinutes()}
							</span>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<img
							style={{ width: "8rem", height: "8rem" }}
							src={`http://openweathermap.org/img/wn/${this.state.dat.weather[0].icon}@2x.png`}
							alt=""
						/>
					</div>
					<div className="container text-center">
						<h1>{parseInt(this.state.dat.main.temp)}&deg;</h1>
					</div>
					<div className="container text-center">
						<h3>{this.state.dat.weather[0].main}</h3>
					</div>
					<div className="d-flex justify-content-center">
						<div className="col-auto me-3">
							<h5>H: {parseInt(this.state.dat.main.temp_max)}</h5>
						</div>
						<div className="col-auto">
							<h5>L: {parseInt(this.state.dat.main.temp_min)}</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default WeatherDayView;
