import { Modal } from "antd";

import usePushNotifications from "./usePushNotifications";

export default function PushNotificationModal() {
	const { showNotificationMessage, onCloseNotificationMessage } = usePushNotifications();

	return (
		<Modal
			centered
			destroyOnClose
			open={showNotificationMessage}
			afterClose={onCloseNotificationMessage}
			cancelButtonProps={{ style: { display: "none" } }}
			onOk={onCloseNotificationMessage}>
			<p>Accept Notifications to get push notifications on incoming orders</p>
		</Modal>
	);
}
