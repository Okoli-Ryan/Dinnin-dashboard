import { Form, Switch as AntDSwitch } from "antd";
import React, { ComponentProps } from "react";

interface ISwitch extends ComponentProps<typeof AntDSwitch> {
	name: string;
	label?: string;
}

export default function Switch({ label, name, ...props }: ISwitch) {
	return (
		<Form.Item label={label} name={name} {...props}>
			<AntDSwitch checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked={props.defaultChecked} checked={props.checked} />
		</Form.Item>
	);
}
