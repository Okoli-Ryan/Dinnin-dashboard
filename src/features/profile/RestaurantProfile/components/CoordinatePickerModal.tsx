import { Form, Modal } from "antd";
import React from "react";

import { TextInput } from "../../../../components";
import CoordinatePicker from "../../../../components/formComponents/CoordinatePicker";

interface ICoordinatePickerModal {
	isOpen: boolean;
	onClose: () => void;
}

export default function CoordinatePickerModal({ isOpen, onClose }: ICoordinatePickerModal) {
	const form = Form.useFormInstance();

	return (
		<Modal
			centered
			closable={false}
			title={<h4 className="text-xl font-bold text-secondary">Point your restaurant location</h4>}
			open={isOpen}
			onOk={onClose}
			cancelButtonProps={{ style: { display: "none" } }}>
			<div className="grid grid-cols-2 gap-4">
				<TextInput name="xCoordinate" inputProps={{ disabled: true, value: form.getFieldValue("xCoordinate") }} label="x-Coordinate" />
				<TextInput name="yCoordinate" inputProps={{ disabled: true, value: form.getFieldValue("yCoordinate") }} label="y-Coordinate" />
			</div>
			<CoordinatePicker latitudeFieldName="yCoordinate" longitudeFieldName="xCoordinate" />
		</Modal>
	);
}
