import React, { useState } from "react";
import "./index.css";

const CountriesGameComponent = ({
	data,
}: {
	data: { [key: string]: string };
}) => {
	const countries = Object.keys(data);
	const cities = Object.values(data);
	const all = countries.concat(cities);

	const [mixedAll, setMixedAll] = useState(all.sort(() => 0.5 - Math.random()));
	const [selectedValues, setSelectedValues] = useState<string[]>([]);
	const [missingVal, setMissingVal] = useState<string>("");

	const handleClick = (item: string) => {
		const typeOfItem = countries.includes(item) ? "country" : "city";

		if (selectedValues.length === 0 || selectedValues.length === 2) {
			if (typeOfItem === "country") {
				setMissingVal(data[item]);
				setSelectedValues([item]);
			} else {
				setSelectedValues([item]);
				setMissingVal(
					Object.keys(data).find((key) => data[key] === item) || ""
				);
			}
		} else if (selectedValues.length === 1) {
			if (item === missingVal) {
				const newElements = mixedAll.filter(
					(elem) => ![missingVal, ...selectedValues].includes(elem)
				);
				setSelectedValues([]);
				setMixedAll(newElements);
			} else {
				setSelectedValues((prevState) => [...prevState, item]);
				setMissingVal("");
			}
		}
	};

	function getBackground(item: string) {
		if (selectedValues.length === 1 && selectedValues[0] === item) {
			return "#0000ff";
		}
		if (selectedValues.length === 2 && selectedValues.includes(item)) {
			return "#ff0000";
		}

		return "";
	}
	return (
		<div className="container">
			{mixedAll.length
				? mixedAll.map((item) => {
						return (
							<button
								onClick={() => {
									handleClick(item);
								}}
								type="button"
								key={item}
								style={{
									backgroundColor: getBackground(item),
								}}
							>
								{item}
							</button>
						);
				  })
				: "Congratulations"}
		</div>
	);
};

export default CountriesGameComponent;
