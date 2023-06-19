import React from "react";
import MapPicker from "react-google-map-picker";

import Config from "../../../core/Config";
import useCoordinatePicker from "./useCoordinatePicker";

export interface ICoordinatePicker {
	latitudeFieldName: string;
	longitudeFieldName: string;
}

export default function CoordinatePicker(props: ICoordinatePicker) {
	const { handleChangeLocation, handleChangeZoom, zoom, defaultLocation } = useCoordinatePicker(props);

	return (
		<MapPicker
			defaultLocation={defaultLocation}
			zoom={zoom}
			style={{ maxHeight: "400px" }}
			//@ts-ignore
			mapTypeId="roadmap"
			onChangeLocation={handleChangeLocation}
			onChangeZoom={handleChangeZoom}
			apiKey={Config.VITE_GOOGLE_MAP_KEY}
		/>
	);
}
