import useFormInstance from "antd/es/form/hooks/useFormInstance";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { ICoordinatePicker } from "./CoordinatePicker";

//Lagos, Nigeria coordinates
const DefaultLocation = { lat: 6.5244, lng: 3.3792 };
const DefaultZoom = 20;

export default function useCoordinatePicker({ latitudeFieldName, longitudeFieldName }: ICoordinatePicker) {
	const form = useFormInstance();

	const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

	const [location, setLocation] = useState(defaultLocation);

	const [zoom, setZoom] = useState(DefaultZoom);

	// useLayoutEffect(() => {
	// 	// Check if the browser supports Geolocation
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(
	// 			(position) => {
	// 				setDefaultLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
	// 			},
	// 			(error) => {
	// 				console.error(error);
	// 			}
	// 		);
	// 	} else {
	// 		console.error("Geolocation is not supported by this browser.");
	// 	}
	// }, []);

	function handleChangeLocation(lat: number, lng: number) {
		setLocation({ lat: lat, lng: lng });
		form.setFieldValue(longitudeFieldName, lng);
		form.setFieldValue(latitudeFieldName, lat);
	}

	function handleChangeZoom(newZoom: number) {
		setZoom(newZoom);
	}

	function handleResetLocation() {
		form.setFieldValue(longitudeFieldName, defaultLocation.lng);
		form.setFieldValue(latitudeFieldName, defaultLocation.lat);
		setZoom(DefaultZoom);
	}

	return { handleResetLocation, handleChangeLocation, handleChangeZoom, zoom, defaultLocation };
}
