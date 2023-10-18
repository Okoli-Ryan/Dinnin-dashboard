import { useEffect, useState } from "react";

import { HAS_PUSH_NOTIFICATIONS_REQUEST_BEEN_ASKED } from "@/core/Constants";
import { reportErrorMessage } from "@/core/Utils";
import { useAppSelector } from "@/store";

import { beamsClientInstance, beamsTokenProvider } from "./utils/BeamsClient";

export default function usePushNotifications() {
	const { id: adminId } = useAppSelector((state) => state.admin)!;
	const [showNotificationMessage, setShowNotificationMessage] = useState(false);

	async function onCloseNotificationMessage() {
		setShowNotificationMessage(false);
		localStorage.setItem(HAS_PUSH_NOTIFICATIONS_REQUEST_BEEN_ASKED, "true");

		try {
			await beamsClientInstance.start();
			const deviceId = await beamsClientInstance.getDeviceId();

			if (deviceId) {
				await beamsClientInstance.setUserId(adminId, beamsTokenProvider);
			}
		} catch (e) {
			console.log(e);
			reportErrorMessage(e);
		}
	}

	useEffect(() => {
		if (localStorage.getItem(HAS_PUSH_NOTIFICATIONS_REQUEST_BEEN_ASKED) !== "true") {
			setShowNotificationMessage(true);
		}
	}, []);

	return { showNotificationMessage, onCloseNotificationMessage };
}
