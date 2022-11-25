import React from "react";
import WeatherHourItem from "./WeatherHourItem";
const weekDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const WeatherListItem = (props) => {
	const [data, setData] = React.useState(props.data);
	return (
		<div className="bg-white rounded-4 px-4 py-1 border m-1 mb-3">
			<div className="row">
				<div className="d-flex align-items-center">
					<h4 className="me-auto">
						{weekDays[new Date(parseInt(data.dt) * 1000).getDay()]}
					</h4>
					<div className="ms-3">H: {parseInt(data.main.temp_max)}&deg;</div>
					<div>L: {parseInt(data.main.temp_min)}&deg;</div>
				</div>
				<hr />
			</div>
			<div className="row px-2 py-1">
				<div className="col-md-3 border-end">
					<div className="d-flex flex-column">
						<div className="d-flex justify-content-center">
							<img
								style={{ width: "8rem", height: "8rem" }}
								src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
								alt=""
							/>
						</div>
						<div className="text-center">{data.weather[0].main}</div>
					</div>
				</div>
				<div className="col-md-9">
					<div className="row">
						{data.hours.map((hour, index) => {
							return <WeatherHourItem key={index} data={hour} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default WeatherListItem;
