import { Modal } from "antd";
import React from "react";

interface INotificationInfoModalProps {
	onCloseModal: () => void;
	showModal: boolean;
}

export default function NotificationInfoModal({ onCloseModal, showModal }: INotificationInfoModalProps) {
	return (
		<Modal centered destroyOnClose open={showModal} afterClose={onCloseModal} cancelButtonProps={{ style: { display: "none" } }} onOk={onCloseModal}>
			<p>Accept Notifications to get push notifications on incoming orders</p>
		</Modal>
	);
}
