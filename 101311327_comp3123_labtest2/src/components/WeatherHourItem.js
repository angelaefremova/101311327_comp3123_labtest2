import React from "react";

const WeatherHourItem = (props) => {
	const [hour, setHour] = React.useState(props.data);
	return (
		<div className="col-md-3">
			<div>{new Date(parseInt(hour.dt) * 1000).getHours() + ":00"}</div>
			<div>
				<img
					style={{ width: "8rem", height: "8rem" }}
					src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
					alt=""
				/>
			</div>
			<div></div>
		</div>
	);
};
export default WeatherHourItem;
