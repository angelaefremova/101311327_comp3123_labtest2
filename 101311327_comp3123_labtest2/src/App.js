import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./screens/Weather";

const App = (props) => {
	const [city, setCity] = useState("Skopje");
	const [forecast, setForecast] = useState({});
	const [curr, setCurr] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=5746dfa1936a4de3792811a5fcb051e4`
			)
			.then((res) => {
				setCurr(res.data);
			})
			.catch((err) => {
				console.log("Error occurred at getCurrentWeatherData()");
				console.log(err);
			});
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=5746dfa1936a4de3792811a5fcb051e4`
			)
			.then((res) => setForecast(res.data[0]))
			.catch((err) => {
				console.log("Error occurred at getForecastData()");
				console.log(err);
			});
		console.log("Final");
		console.log(curr);
		console.log(forecast);
	}, []);
	return <Weather current={curr} forecast={forecast} />;
};

export default App;

